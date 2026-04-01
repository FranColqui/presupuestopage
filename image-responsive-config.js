/**
 * IMAGE RESPONSIVE CONFIG
 * ============================================================
 * 
 * Este archivo centraliza toda la configuración de la imagen
 * del plano y la sincronización dinámica de botones.
 * 
 * Ventajas:
 * - Botones siempre alineados a la imagen, sin importar tamaño
 * - Cálculo dinámico de escala en tiempo real
 * - Optimización de rendimiento (throttle, lazy load)
 * - Responsive perfecto en todas las pantallas
 * ============================================================
 */

class ImageResponsiveConfig {
  constructor() {
    this.planImage = null;
    this.planContainer = null;
    this.roomButtons = [];
    this.imageNaturalWidth = 0;
    this.imageNaturalHeight = 0;
    this.containerWidth = 0;
    this.containerHeight = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.resizeTimeout = null;
    this.initialized = false;

    // Variables CSS personalizadas para la escala
    this.cssVars = {
      '--image-scale-x': 1,
      '--image-scale-y': 1,
      '--image-width': '100%',
      '--image-height': 'auto'
    };
  }

  /**
   * Inicializar el sistema al cargar la página
   */
  init() {
    if (this.initialized) return;

    this.planImage = document.getElementById('planImage');
    this.planContainer = document.getElementById('planContainer');
    this.roomButtons = document.querySelectorAll('.room-btn');

    if (!this.planImage || !this.planContainer) {
      console.warn('ImageResponsiveConfig: Elementos no encontrados');
      return;
    }

    // Event: cuando la imagen carga naturalmente
    this.planImage.addEventListener('load', () => this.onImageLoad());
    
    // Event: resize debounced
    window.addEventListener('resize', () => this.onWindowResize());
    
    // Event: orientación cambió (móvil)
    window.addEventListener('orientationchange', () => this.onOrientationChange());

    // Intersection Observer para lazy loading
    this.setupLazyLoad();

    // Si la imagen ya está en caché (loaded):
    if (this.planImage.complete) {
      this.onImageLoad();
    }

    this.initialized = true;
    console.log('✓ ImageResponsiveConfig inicializado');
  }

  /**
   * Cuando la imagen termina de cargar
   */
  onImageLoad() {
    this.imageNaturalWidth = this.planImage.naturalWidth;
    this.imageNaturalHeight = this.planImage.naturalHeight;
    
    console.log(`✓ Imagen cargada: ${this.imageNaturalWidth}x${this.imageNaturalHeight}px`);
    
    this.recalculateScale();
    this.updateCSSVariables();
  }

  /**
   * Recalcular escala en tiempo real
   */
  recalculateScale() {
    if (!this.planImage) return;

    // Dimensiones reales del contenedor en pantalla
    const rect = this.planContainer.getBoundingClientRect();
    this.containerWidth = rect.width;
    this.containerHeight = rect.height;

    // Dimensiones que la imagen REALMENTE tiene en pantalla
    const displayWidth = this.planImage.offsetWidth;
    const displayHeight = this.planImage.offsetHeight;

    // Ratio de escala (comparar natural vs display)
    this.scaleX = displayWidth / this.imageNaturalWidth;
    this.scaleY = displayHeight / this.imageNaturalHeight;

    this.cssVars['--image-scale-x'] = this.scaleX;
    this.cssVars['--image-scale-y'] = this.scaleY;
    this.cssVars['--image-width'] = `${displayWidth}px`;
    this.cssVars['--image-height'] = `${displayHeight}px`;
  }

  /**
   * Actualizar variables CSS (accesibles en JS y CSS)
   */
  updateCSSVariables() {
    const root = document.documentElement;
    Object.entries(this.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  /**
   * Resize debounced: ejecuta recalculateScale cada 150ms
   */
  onWindowResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.recalculateScale();
      this.updateCSSVariables();
      console.log(`↻ Escala recalculada: ${(this.scaleX * 100).toFixed(1)}% x ${(this.scaleY * 100).toFixed(1)}%`);
    }, 150);
  }

  /**
   * Cambio de orientación (móvil)
   */
  onOrientationChange() {
    // Esperar a que el navegador termine el reflow
    setTimeout(() => {
      this.recalculateScale();
      this.updateCSSVariables();
      console.log('✓ Orientación cambió, escala actualizada');
    }, 500);
  }

  /**
   * Lazy loading de imágenes con Intersection Observer
   */
  setupLazyLoad() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
              console.log('✓ Imagen lazy-loaded:', img.src);
            }
          }
        });
      }, { rootMargin: '50px' });

      // Observer en la imagen principal
      if (this.planImage) {
        observer.observe(this.planImage);
      }
    }
  }

  /**
   * Obtener información de escala (para debugging)
   */
  getScaleInfo() {
    return {
      naturalWidth: this.imageNaturalWidth,
      naturalHeight: this.imageNaturalHeight,
      displayWidth: this.planImage?.offsetWidth || 0,
      displayHeight: this.planImage?.offsetHeight || 0,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      containerWidth: this.containerWidth,
      containerHeight: this.containerHeight
    };
  }

  /**
   * Log de debug
   */
  debug() {
    console.table(this.getScaleInfo());
  }
}

// Instanciar y ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const imgConfig = new ImageResponsiveConfig();
  imgConfig.init();
  
  // Disponible globalmente para debugging: window.imgConfig.debug()
  window.imgConfig = imgConfig;
});
