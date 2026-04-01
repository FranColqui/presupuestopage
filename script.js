/* ============================================================
   DATOS DE LAS HABITACIONES
   Modificá el contenido HTML de cada `memoria` para
   personalizar la Memoria Descriptiva de cada espacio.
   ============================================================ */

const rooms = {

  dormitorio1: {
    tag: "Dormitorio 01",
    title: "Dormitorio 1",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value">7.26 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">2.42 × 3 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value">30.63 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">12</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        <li>Quitar puerta exterior</li>
        <li>Construir vano para ventana</li>
        <li>Colocación de ventana</li>
        <li>Revoque grueso y fino de vano</li>
        <li>Canaleteado para 2 bocas y  octogonal exterior</li>
        <li>Recableado eléctrico</li>
        <li>Instalación de tomacorrientes (4) y portalamparas (1)</li>
        <li>Instalación de tomacorrientes externo (aire acondicionado)</li>
        <li>Tratamiento básico de todas las paredes para pintura</li>
        <li>Pintura de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de aire acondicionado</li>
        <li>Pintura de cielorazo</li>
        <li>Tratamiento o cambio de piso</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  },

  dormitorio2: {
    tag: "Dormitorio 02",
    title: "Dormitorio 2",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value">7.26 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">2.42 × 3 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value">30.63 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">13</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        <li>Quitar aire acondicionado</li>
        <li>Sellar hueco</li>
        <li>Revoque grueso y fino de vano</li>
        <li>Cambio de ventana</li>
        <li>Canaleteado para 2 bocas y  octogonal exterior</li>
        <li>Recableado eléctrico</li>
        <li>Instalación de tomacorrientes (4) y portalamparas (1)</li>
        <li>Instalación de tomacorrientes externo (aire acondicionado)</li>
        <li>Tratamiento avanzado de todas las paredes para pintura/empapelado</li>
        <li>Pintura/empapelado de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de aire acondicionado</li>
        <li>Pintura de cielorazo</li>
        <li>Tratamiento o cambio de piso</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  },

  dormitorio3: {
    tag: "Dormitorio 03",
    title: "Dormitorio 3",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value">8.85 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">2.95 × 3 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value">33.61 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">14</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        <li>Quitar aire acondicionado</li>
        <li>Sellar hueco</li>
        <li>Revoque grueso y fino de vano</li>
        <li>Cambio de ventana</li>
        <li>Colocación de cielorazo</li>
        <li>Canaleteado para 2 bocas y  octogonal exterior</li>
        <li>Recableado eléctrico</li>
        <li>Instalación de tomacorrientes (6) y portalamparas (1)</li>
        <li>Instalación de tomacorrientes externo (aire acondicionado)</li>
        <li>Tratamiento avanzado de todas las paredes para pintura/empapelado</li>
        <li>Pintura/empapelado de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de aire acondicionado</li>
        <li>Tratamiento o cambio de piso</li>
        <li>Solución de desperfectos en el techo</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  },

  bano: {
    tag: "Servicios",
    title: "Baño",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value">2.29 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">1.8 × 1.27 3 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value"> 17.12m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">19</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        <li>Quitar artefactos sanitarios y amoblamiento</li>
        <li>Remover revestimiento existente</li>
        <li>Remover piso</li>
        <li>Remover ventana</li>
        <li>Sellado/tratamiento del hueco de ventana</li>
        <li>Reacomodar salidas sanitarias y cloacales</li>
        <li>Instalación de recolector unico (ducha y baño)</li>
        <li>Instalación de cañerías</li>
        <li>Colocación de revestimiento cerámico en paredes</li>
        <li>Colocación de piso (material a definir)</li>
        <li>Instalación de artefactos sanitarios (inodoro, lavamano) y grifería</li>
        <li>Recableado/canaleteado eléctrico</li>
        <li>Instalación de tomacorrientes y portalamparas (1)</li>
        <li>Tratamiento básico de todas las paredes para pintura</li>
        <li>Pintura de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de extractor de aire(a definir)</li>
        <li>Pintura de cielorazo</li>
        <li>amoblamiento adicional de baño (baulera, bajo lavatorio)</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  },

  living: {
    tag: "Zona Social",
    title: "Living",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value"> 23.88m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">2.73 × 8.75 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value">47.28 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">13</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        <li>Remover fila de piso</li>
        <li>Canaleteado bajada/subida de agua</li>
        <li>Instalación de nuevas cañerías gas/agua</li>
        <li>Remover aire acondicionado</li>
        <li>Colocación de piso</li>
        <li>Canaleteado para octogonal exterior</li>
        <li>Recableado eléctrico</li>
        <li>Instalación de tomacorrientes (4) y portalamparas (2)</li>
        <li>Tratamiento básico de todas las paredes para pintura/empapelado</li>
        <li>Pintura de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de aire acondicionado</li>
        <li>Pintura de cielorazo</li>
        <li>Tratamiento o cambio de piso</li>
        <li>Reparación de ventilador de techo</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  },

  comedor: {
    tag: "Zona Social",
    title: "Comedor",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value">23.20 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">6.14 × 3.78 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value">19.32 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">7</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        <li>Remover pared de machimbre</li>
        <li>Recableado eléctrico</li>
        <li>Instalación de tomacorrientes (3) y portalamparas (2)</li>
        <li>Tratamiento básico de todas las paredes para pintura/empapelado</li>
        <li>Pintura de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
        <li>Tratamiento de carpinteria de ventana existente</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de aire acondicionado</li>
        <li>Pintura de cielorazo</li>
        <li>Tratamiento o cambio de piso</li>
        <li>Reparación de ventilador de techo</li>
        <li>Tratamiento de carpinteria de placard existente</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  },

  cocina: {
    tag: "Servicios",
    title: "Cocina",
    memoria: `
      <div class="ficha">
        <div class="ficha-item">
          <span class="ficha-label">Superficie planta/ techo </span>
          <span class="ficha-value"> 7.37m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Dimensiones</span>
          <span class="ficha-value">1.95 × 3.78 m</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Superficie total paredes</span>
          <span class="ficha-value">13.39 m²</span>
        </div>
        <div class="ficha-item">
          <span class="ficha-label">Cantidad de intervenciones</span>
          <span class="ficha-value">23</span>
        </div>
      </div>

      <h3>Intervenciones (priorizando orden cronológico)</h3>
      <ul>
        
        <li>Quitar amoblamiento existente</li>
        <li>Remover revestimiento existente</li>
        <li>Remover artefactos existentes</li>
        <li>Remover fila de piso</li>
        <li>Canaleteado agua y gas </li>
        <li>Instalación de nuevas cañerías gas/agua</li>
        <li>Cambio de ventana</li>
        <li>Construcción de sobrepiso</li>
        <li>Instalacion de rejilla recolectora bajo mesada</li>
        <li>Instalacion de cañerias y artefactos de gas y agua</li>
        <li>Colocación de revestimiento cerámico en paredes</li>
        <li>Construcción de barra de cocina</li>
        <li>Construcción de mueble bajo mesada</li>
        <li>Colocación de piso</li>
        <li>Recableado eléctrico</li>
        <li>Instalación de tomacorrientes (4) y portalamparas (2)</li>
        <li>Tratamiento avanzado de todas las paredes para pintura/empapelado</li>
        <li>Pintura de todas las paredes</li>
        <li>Reparación / cambio de cerradura de puerta</li>
        <li>Colocacion de amoblamiento nuevo</li>
      </ul>

      <h3>Items no incluidos</h3>
      <ul>
        <li>Circuito eléctrico independiente</li>
        <li>Instalación de aire acondicionado</li>
        <li>Pintura de cielorazo</li>
        <li>Rejilla recolectora cocina</li>
        <li>Extracción de de cañeria antigua</li>
        <li>Instalación de extractor de aire(a definir)</li>
      </ul>

      <div class="nota">
        <p>La lista solo expresa aspectos generales de cada item, algunos requieren mas complejidad en su ejecución.</p>
      </div>
    `
  }

};

/* ============================================================
   LÓGICA DEL MODAL
   ============================================================ */

const overlay   = document.getElementById('modalOverlay');
const modalEl   = document.getElementById('modal');
const modalTag  = document.getElementById('modalTag');
const modalTitle= document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn  = document.getElementById('modalClose');
const btnPrint  = document.getElementById('btnPrint');
const printZone = document.getElementById('printZone');

let currentRoom = null;

function openModal(roomKey) {
  const room = rooms[roomKey];
  if (!room) return;

  currentRoom = roomKey;
  modalTag.textContent  = room.tag;
  modalTitle.textContent= room.title;
  modalBody.innerHTML   = room.memoria;
  modalBody.scrollTop   = 0;

  updateRendersButton(roomKey);

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  currentRoom = null;
}

// Botones de habitación
document.querySelectorAll('.room-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const roomKey = btn.dataset.room;

    // Animación de click ring
    btn.classList.remove('clicked');
    void btn.offsetWidth; // reflow
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 600);

    openModal(roomKey);
  }, { passive: true });
});

// Cerrar con botón
closeBtn.addEventListener('click', closeModal, { passive: true });

// Cerrar clickeando el overlay (fuera del modal)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
}, { passive: true });

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
}, { passive: true });

/* ============================================================
   IMPRIMIR / EXPORTAR PDF
   ============================================================ */

btnPrint.addEventListener('click', () => {
  if (!currentRoom) return;
  const room = rooms[currentRoom];

  // Construir zona de impresión con estilos propios
  const today = new Date().toLocaleDateString('es-AR', {
    day: '2-digit', month: 'long', year: 'numeric'
  });

  // Convertir el HTML del modal a versión print
  const printHTML = convertToPrintHTML(room.memoria);

  printZone.innerHTML = `
    <div class="print-header">
      <div>
        <div class="print-tag">MEMORIA DESCRIPTIVA · ${room.tag.toUpperCase()}</div>
        <div class="print-title">${room.title}</div>
      </div>
      <div class="print-meta">
        Palpalá · Jujuy · Argentina<br/>
        Planta Baja<br/>
        Fecha: ${today}
      </div>
    </div>
    <div class="print-body">
      ${printHTML}
    </div>
    <div class="print-footer">
      <span>Memoria Descriptiva — ${room.title}</span>
      <span>${today}</span>
    </div>
  `;

  window.print();
});

function convertToPrintHTML(html) {
  // Reemplazar clases del modal por clases de impresión equivalentes
  return html
    .replace(/class="ficha"/g, 'class="print-ficha"')
    .replace(/class="ficha-item"/g, 'class="print-ficha-item"')
    .replace(/class="ficha-label"/g, 'class="print-ficha-label"')
    .replace(/class="ficha-value"/g, 'class="print-ficha-value"')
    .replace(/class="nota"/g, 'class="print-nota"');
}

/* ============================================================
   AJUSTE DE BOTONES AL TAMAÑO DE IMAGEN
   ============================================================ */
// Los botones usan posicionamiento en % relativo al contenedor,
// lo que es automático. Esta función re-verifica al cargar.

const planImage = document.getElementById('planImage');
planImage.addEventListener('load', () => {
  // La imagen cargó, los % son correctos automáticamente
  console.log('Plano cargado:', planImage.naturalWidth, 'x', planImage.naturalHeight);
}, { passive: true });

/* ============================================================
   GALERÍA DE RENDERS
   ============================================================ */

let rendersData = {};
let currentGalleryIndex = 0;
let currentGalleryImages = [];

// Cargar renders-config.json
fetch('renders-config.json')
  .then(response => response.json())
  .then(data => {
    rendersData = data;
    console.log('Renders cargados:', rendersData);
    // Si el modal ya está abierto, actualizar el botón
    if (currentRoom) updateRendersButton(currentRoom);
  })
  .catch(error => console.error('Error cargando renders:', error));

const btnRenders = document.getElementById('btnRenders');
const galleryOverlay = document.getElementById('galleryOverlay');
const galleryImage = document.getElementById('galleryImage');
const galleryClose = document.getElementById('galleryClose');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const galleryCounter = document.getElementById('galleryCounter');
const galleryTag = document.getElementById('galleryTag');
const galleryRoomTitle = document.getElementById('galleryRoomTitle');
const galleryDots = document.getElementById('galleryDots');

// Actualizar visibilidad del botón "Ver Renders"
function updateRendersButton(roomKey) {
  if (rendersData[roomKey] && rendersData[roomKey].length > 0) {
    btnRenders.style.display = 'flex';
  } else {
    btnRenders.style.display = 'none';
  }
}

// Construir dots de navegación
function buildGalleryDots(total) {
  galleryDots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Imagen ${i + 1}`);
    dot.addEventListener('click', () => {
      currentGalleryIndex = i;
      displayGalleryImage();
    }, { passive: true });
    galleryDots.appendChild(dot);
  }
}

function updateDots() {
  galleryDots.querySelectorAll('.gallery-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentGalleryIndex);
  });
}

// Abrir galería
btnRenders.addEventListener('click', () => {
  if (!currentRoom || !rendersData[currentRoom]) return;

  const room = rooms[currentRoom];
  currentGalleryImages = rendersData[currentRoom];
  currentGalleryIndex = 0;

  if (galleryTag) galleryTag.textContent = (room.tag || 'ESPACIO').toUpperCase() + ' · RENDERS';
  if (galleryRoomTitle) galleryRoomTitle.textContent = room.title || currentRoom;

  buildGalleryDots(currentGalleryImages.length);
  displayGalleryImage();
  galleryOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}, { passive: true });

// Cerrar galería
galleryClose.addEventListener('click', closeGallery, { passive: true });
galleryOverlay.addEventListener('click', (e) => {
  if (e.target === galleryOverlay) closeGallery();
}, { passive: true });

function closeGallery() {
  galleryOverlay.classList.remove('active');
  // Si el modal sigue abierto, mantener overflow hidden
  if (overlay.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  currentGalleryImages = [];
  currentGalleryIndex = 0;
}

// Navegación
galleryPrev.addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  displayGalleryImage();
}, { passive: true });

galleryNext.addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
  displayGalleryImage();
}, { passive: true });

// Teclado
document.addEventListener('keydown', (e) => {
  if (!galleryOverlay.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') galleryPrev.click();
  if (e.key === 'ArrowRight') galleryNext.click();
  if (e.key === 'Escape') closeGallery();
}, { passive: true });

function displayGalleryImage() {
  if (!currentGalleryImages.length) return;

  const imagePath = currentGalleryImages[currentGalleryIndex];
  galleryImage.src = imagePath;
  galleryCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
  updateDots();

  // Ocultar nav si solo hay 1 imagen
  const showNav = currentGalleryImages.length > 1;
  galleryPrev.style.display = showNav ? 'flex' : 'none';
  galleryNext.style.display = showNav ? 'flex' : 'none';
}


