// Elementos del DOM
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");
const header = document.getElementById("header");
const mainContent = document.querySelector('.main-content');
const detailPage = document.getElementById('detailPage');

// Estado de la aplicación
let currentCandidato = null;

// Datos de los candidatos - CON DOS IMÁGENES (card y detalle)
const candidatosData = [
    {
    id: 'loza',
    name: "Leonardo Loza",
    role: "Candidato a Gobernador",
    experience: "Exsenador, dirigente del Trópico",
    longDescription: "Leonardo Loza es un dirigente campesino del Trópico de Cochabamba y fue senador por el MAS hasta 2025. Nació en la provincia Ayopaya y creció en el trópico, donde ejerció como dirigente de los productores de coca. Representa al ala 'evista' del partido y su candidatura busca unir a las 16 provincias del departamento, integrando campo y ciudad. Plantea convertir a Cochabamba en el 'corazón económico' de Bolivia mediante industrialización y coordinación con el Gobierno nacional.",
    proposals: [
      { icon: "fa-solid fa-handshake", text: "Unidad entre campo y ciudad, integrando las 16 provincias" },
      { icon: "fa-solid fa-industry", text: "Convertir a Cochabamba en el 'corazón económico' de Bolivia" },
      { icon: "fa-solid fa-tractor", text: "Impulso a la producción e industrialización agropecuaria" },
      { icon: "fa-solid fa-road", text: "Mejorar caminos vecinales y conectividad provincial" },
      { icon: "fa-solid fa-droplet", text: "Garantizar acceso a agua potable en zonas rurales" },
      { icon: "fa-solid fa-leaf", text: "Solución a la contaminación del río Rocha" }
    ],
    imgCard: "img/loza.png",
    imgDetail: "img/loza-detalle.png"
  },
  {
    id: 'zavaleta',
    name: "Carlos A. Zavaleta",
    role: "Candidato a Alcalde de Cochabamba",
    experience: "Ingeniero petrolero con 18 años de experiencia",
    longDescription: "Carlos Alfredo Zavaleta es ingeniero petrolero con más de 18 años de experiencia profesional. Trabajó en YPFB como responsable de Ingeniería y Proyectos, y actualmente es presidente del Colegio de Ingenieros Petroleros de Bolivia. Se identifica como 'evista' y propone una 'reingeniería municipal' basada en siete pilares. Su plan incluye digitalización total de trámites, cero tolerancia a la corrupción y la rescisión del contrato de basura que considera 'lesivo' para la ciudad.",
    proposals: [
      { icon: "fa-solid fa-robot", text: "Digitalización de trámites con inteligencia artificial para eliminar coimas" },
      { icon: "fa-solid fa-shield", text: "Cero tolerancia a la corrupción y sistema antisoborno" },
      { icon: "fa-solid fa-trash", text: "Rescindir contrato de basura y crear planta industrializadora" },
      { icon: "fa-solid fa-droplet", text: "Garantizar acceso a agua potable y alcantarillado en toda la ciudad" },
      { icon: "fa-solid fa-money-bill-trend-up", text: "Reducir sueldos del alcalde y concejales entre 30% y 40%" },
      { icon: "fa-solid fa-store", text: "Cero costo en licencias para nuevos emprendedores el primer año" }
    ],
    imgCard: "img/zabaleta.png",
    imgDetail: "img/zabaleta.png"
  },
    {
    id: 'cerlin',
    name: "Cerlin Coyo Porco",
    role: "Candidata a Concejala", // Corregido: género y cargo
    experience: "Dirigente vecinal y social",
    longDescription: "Cerlin Coyo Porco es una destacada líder social con base en la zona Sur de Cochabamba. Su trayectoria se ha forjado en las bases vecinales, donde ha trabajado por el acceso a servicios básicos y la seguridad jurídica de los asentamientos urbanos. Postula como concejala con el objetivo de ser la voz de los distritos más necesitados en el municipio, enfocándose en la fiscalización de obras y la equidad en la distribución del presupuesto municipal.",
    proposals: [
      { icon: "fa-solid fa-house-chimney-window", text: "Regularización del derecho propietario en barrios periféricos" },
      { icon: "fa-solid fa-faucet-drip", text: "Ampliación de redes de agua potable para la zona Sur" },
      { icon: "fa-solid fa-shield-halved", text: "Plan 'Barrio Seguro' con alarmas vecinales y mejor iluminación" },
      { icon: "fa-solid fa-hand-holding-heart", text: "Fortalecimiento de los SLIMs para protección de la mujer" },
      { icon: "fa-solid fa-users-gear", text: "Presupuesto participativo directo para juntas vecinales" }
    ],
    imgCard: "img/cerlin.png", // Asegúrate de tener esta imagen
    imgDetail: "img/cerlin.png"
  },
  {
    id: 'paco',
    name: "Juan Carlos Paco Zamora",
    role: "Asambleista por territorio",
    experience: "Ex Presidente del Concejo Municipal",
    longDescription: "Juan Carlos Paco Zamora es un político y abogado cochabambino con amplia trayectoria en el ámbito municipal. Fue Presidente del Concejo Municipal de Cochabamba y actualmente es una de las figuras clave dentro del Movimiento Al Socialismo (MAS) en la región. Su trabajo se ha centrado en la fiscalización y en proyectos de desarrollo urbano para la ciudad.",
    proposals: [
      { icon: "fa-solid fa-scale-balanced", text: "Fortalecimiento de la fiscalización municipal" },
      { icon: "fa-solid fa-bus", text: "Mejorar el transporte público en la zona Sur" },
      { icon: "fa-solid fa-hospital", text: "Ampliar centros de salud en distritos alejados" },
      { icon: "fa-solid fa-school", text: "Construcción de nuevas unidades educativas" },
      { icon: "fa-solid fa-lightbulb", text: "Iluminación y seguridad en barrios" }
    ],
    imgCard: "img/juan.png",
    imgDetail: "img/juan-detalle.png"
  },

];

// Datos de las ubicaciones
const ubicacionesData = [
  {
    /*zona: "Casa de Campaña Central",
    // Link corto: El sistema detectará que es corto y mostrará un botón "Abrir Mapa"
    mapa: "https://maps.app.goo.gl/r7no8QfGxSfK9cK19",
    horario: "Lunes a Sábado: 09:00 - 19:00",
    telefono: "+591 4 450 1234",
    direccion: "Calle Nataniel Aguirre #245, acera este."
  },
  {
    zona: "Casa Zona Sud",
    // Link largo (navegador): El sistema extraerá coordenadas y mostrará el mapa
    mapa: "https://www.google.com/maps/place/Mercado+Campesino/@-17.417575,-66.159355,15z",
    horario: "Lunes a Viernes: 10:00 - 18:00",
    telefono: "+591 4 450 5678",
    direccion: "Av. Petrolera, Km 3, acera norte."
  */}
];

// Datos de eventos
const eventosData = [
  {
    /*dia: "5",
    mes: "MAR",
    titulo: "Encuentro Comunitario",
    hora: "10:00 – 12:30",
    lugar: "Plaza 14 de Septiembre",
    tags: ["ParticipaciónCiudadana", "DiálogoAbierto"]
  },
  {
    dia: "12",
    mes: "MAR",
    titulo: "Foro Vecinal",
    hora: "17:00 – 19:00",
    lugar: "Casa de la Cultura",
    tags: ["ForoAbierto", "VecinosUnidos"]
  },
  {
    dia: "20",
    mes: "MAR",
    titulo: "Debate Público",
    hora: "18:00 – 20:00",
    lugar: "Teatro Municipal",
    tags: ["Debate2026", "PropuestasClaras"]
  */}
];

// ========== INICIALIZACIÓN ==========

// Valor que identifica la versión actual del sitio. Debe cambiarse
// únicamente cuando los archivos estáticos (imágenes, CSS, JS) sean
// modificados en el repositorio. Puede ser un número de versión semántica,
// fecha de despliegue o hash de commit.
const APP_VERSION = '1.0.0';

// trackea la versión usada en la última recarga de imágenes para evitar
// solicitar ficheros innecesariamente si no ha cambiado.
let lastReloadVersion = '';

/**
 * Recarga imágenes utilizando APP_VERSION como cache‑buster. Si la versión
 * coincide con la última vez que se ejecutó la función, no hace nada.
 */
function reloadImages() {
    if (lastReloadVersion === APP_VERSION) {
        // ya estamos en la versión correcta, no hay que recargar nada
        return;
    }

    document.querySelectorAll('img').forEach(img => {
        const orig = img.getAttribute('data-original-src') || img.src;
        if (!img.getAttribute('data-original-src')) {
            img.setAttribute('data-original-src', orig);
        }
        const separator = orig.includes('?') ? '&' : '?';
        img.src = orig + separator + 'v=' + APP_VERSION;
    });

    lastReloadVersion = APP_VERSION;
}

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const enterButton = document.getElementById('enterButton');

    const enterSite = () => {
        if (splashScreen) {
            splashScreen.classList.add('hidden');
        }
        document.body.classList.remove('loading');

        // Force image refresh to bust cache and avoid manual Ctrl+F5
        reloadImages();

        // Initialize AOS now that the content is visible
        AOS.init({
            duration: 600,
            once: true,
            disable: 'mobile'
        });

        // Optional: remove the splash screen from DOM after transition
        setTimeout(() => {
            if (splashScreen) splashScreen.remove();
        }, 600);
    };

    if (enterButton) {
        enterButton.addEventListener('click', enterSite);
    }

    renderCandidatos();
    renderUbicaciones();
    renderEventos();
    initEventListeners();
    checkActiveSection();
    addBackButton();
});

// ========== RENDERIZADO DE CANDIDATOS ==========
function renderCandidatos() {
  const grid = document.getElementById('candidatosGrid');
  if (!grid) return;

  grid.innerHTML = candidatosData.map((candidato, index) => {
    const delay = index * 100;

    return `
      <div class="card" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="card-image">
          <img src="${candidato.imgCard}" alt="${candidato.name}" loading="lazy">
        </div>
        <div class="card-content">
          <span class="candidate-role">${candidato.role}</span>
          <h3>${candidato.name}</h3>
          <p class="card-experience">${candidato.experience}</p>
        </div>
        <div class="card-footer">
          <span class="card-action" onclick="showCandidatoDetail('${candidato.id}')">
            Ver perfil <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Analiza la URL de Google Maps y decide si se puede incrustar o si debe ser un link externo.
 */
function formatMapUrl(url) {
  // 1. Si ya es un embed válido
  if (url.includes('output=embed') || url.includes('/embed')) {
    return { type: 'embed', url: url };
  }

  // 2. Intentar extraer coordenadas de URL larga (formato navegador @lat,lon)
  const atRegex = /@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d*z?)/;
  const atMatch = url.match(atRegex);

  if (atMatch) {
    const lat = atMatch[1];
    const lon = atMatch[2];
    const zoom = atMatch[3].replace('z', '') || '15';
    return { 
      type: 'embed', 
      url: `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=${zoom}&output=embed` 
    };
  }

  // 3. Intentar extraer coordenadas de formato !3d...!4d...
  const dataRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
  const dataMatch = url.match(dataRegex);

  if (dataMatch) {
    return { 
      type: 'embed', 
      url: `https://maps.google.com/maps?q=${dataMatch[1]},${dataMatch[2]}&hl=es&z=15&output=embed` 
    };
  }

  // 4. Si es un link corto (maps.app.goo.gl) o no reconocible, devolvemos tipo 'link'
  return { type: 'link', url: url };
}

function renderUbicaciones() {
  const grid = document.getElementById('locationsGrid');
  if (!grid) return;
  
  grid.innerHTML = ubicacionesData.map(ubicacion => {
    const mapInfo = formatMapUrl(ubicacion.mapa);
    let mapContent;

    if (mapInfo.type === 'embed') {
      mapContent = `<iframe src="${mapInfo.url}" loading="lazy" title="Mapa ${ubicacion.zona}"></iframe>`;
    } else {
      // Fallback elegante para links cortos
      mapContent = `
        <div class="map-placeholder">
          <i class="fas fa-map-marked-alt"></i>
          <p>Ver ubicación en Google Maps</p>
          <a href="${ubicacion.mapa}" target="_blank" class="btn-map-link">
            Abrir Mapa <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      `;
    }

    return `
    <div class="location-card">
      <div class="location-header">
        <i class="fas fa-map-pin"></i>
        <h3>${ubicacion.zona}</h3>
      </div>
      <div class="location-map">
        ${mapContent}
      </div>
      <div class="location-info">
        <p><i class="fas fa-clock"></i> ${ubicacion.horario}</p>
        <p><i class="fas fa-phone"></i> ${ubicacion.telefono}</p>
        <p><i class="fas fa-location-dot"></i> ${ubicacion.direccion}</p>
      </div>
    </div>
  `}).join('');
}

function renderEventos() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  
  grid.innerHTML = eventosData.map(evento => `
    <div class="event-card">
      <div class="event-date">
        <span class="day">${evento.dia}</span>
        <span class="month">${evento.mes}</span>
      </div>
      <div class="event-details">
        <h3>${evento.titulo}</h3>
        <p><i class="fas fa-clock"></i> ${evento.hora}</p>
        <p><i class="fas fa-location-dot"></i> ${evento.lugar}</p>
        <div class="event-tags">
          ${evento.tags.map(tag => `<span>#${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ========== VISTA DE DETALLE (CON IMAGEN ESPECÍFICA) ==========
function showCandidatoDetail(candidatoId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  const candidato = candidatosData.find(c => c.id === candidatoId);
  if (!candidato) return;
  
  currentCandidato = candidato;
  
  // Actualizar el header
  header.classList.add('detail-view');
  
  // Actualizar el botón de volver
  const backBtn = document.querySelector('.btn-back');
  if (backBtn) {
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Volver a candidatos';
  }
  
  // Renderizar la página de detalle (con imagen de detalle)
  renderDetailPage(candidato);
  
  // Ocultar contenido principal y mostrar detalle
  mainContent.classList.add('hidden');
  detailPage.classList.add('active');
  
  // Scroll al inicio
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Actualizar título de la página
  document.title = `${candidato.name} - Alcaldía Cochabamba`;
}

function renderDetailPage(candidato) {
  if (!detailPage) return;
  
  // Usar imgDetail si existe, si no, usar imgCard como fallback
  const detailImage = candidato.imgDetail || candidato.imgCard;
  
  detailPage.innerHTML = `
    <div class="detail-container">
      <div class="detail-content">
        <div class="detail-image">
          <img src="${detailImage}" alt="${candidato.name}">
        </div>
        <div class="detail-info">
          <h1>${candidato.name}</h1>
          <span class="detail-role">${candidato.role}</span>
          <p class="detail-description">${candidato.longDescription}</p>
          
          <div class="detail-section">
            <h3>
              <i class="fas fa-list-check"></i>
              Propuestas principales
            </h3>
            <ul class="detail-proposals">
              ${candidato.proposals.map(proposal => `
                <li>
                  <i class="fas ${proposal.icon}"></i>
                  ${proposal.text}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function hideDetailView() {
  header.classList.remove('detail-view');
  mainContent.classList.remove('hidden');
  detailPage.classList.remove('active');
  document.title = 'Portal Institucional – Alcaldía Cochabamba 2026';
  
  // Scroll a la sección de candidatos
  const candidatosSection = document.getElementById('candidatos');
  if (candidatosSection) {
    const headerOffset = 80;
    const elementPosition = candidatosSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function addBackButton() {
  const nav = document.querySelector('.desktop-nav');
  const headerContainer = document.querySelector('.header-container');
  
  if (document.querySelector('.btn-back')) return;
  
  const backBtn = document.createElement('button');
  backBtn.className = 'btn-back';
  backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Volver';
  backBtn.onclick = hideDetailView;
  
  if (headerContainer) {
    headerContainer.insertBefore(backBtn, nav);
  }
}

// ========== SIDEBAR ==========
function initEventListeners() {
  menuBtn.addEventListener("click", openSidebar);
  if (closeSidebar) closeSidebar.addEventListener("click", closeSidebarMenu);
  if (overlay) overlay.addEventListener("click", closeSidebarMenu);
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebarMenu();
    }
    
    if (e.key === "Escape" && detailPage.classList.contains('active')) {
      hideDetailView();
    }
  });
}

function openSidebar() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebarMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ========== HEADER SCROLL ==========
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  
  if (!detailPage.classList.contains('active')) {
    checkActiveSection();
  }
});

// ========== SECCIÓN ACTIVA ==========
function checkActiveSection() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.desktop-nav a, .sidebar-nav a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (sidebar.classList.contains('active')) {
        closeSidebarMenu();
      }
    }
  });
});

// Exponer funciones globales
window.showCandidatoDetail = showCandidatoDetail;
window.hideDetailView = hideDetailView;