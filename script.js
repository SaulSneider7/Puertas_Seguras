// ==========================================
// NAVBAR
// ==========================================
const nav = document.getElementById('main-nav');
const title = document.getElementById('nav-title');
const subtitle = document.getElementById('nav-subtitle');
const links = document.querySelectorAll('.nav-item');
const icon = document.getElementById('mobile-icon');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;

    if (scrolled) {
        nav.classList.add('bg-white', 'shadow-xl', 'py-2');
        nav.classList.remove('bg-transparent', 'py-4');

        title.classList.replace('text-white', 'text-blue-900');
        subtitle.classList.replace('text-blue-200', 'text-blue-600');

        // 🔹 ICONO MOBILE AZUL
        icon.classList.remove('text-white');
        icon.classList.add('text-blue-900');

        links.forEach(link => {
            link.classList.remove('text-white/80', 'hover:text-white');
            link.classList.add('text-slate-600', 'hover:text-blue-900');
        });
    } else {
        nav.classList.remove('bg-white', 'shadow-xl', 'py-2');
        nav.classList.add('bg-transparent', 'py-4');

        title.classList.replace('text-blue-900', 'text-white');
        subtitle.classList.replace('text-blue-600', 'text-blue-200');

        // 🔹 ICONO MOBILE BLANCO
        icon.classList.remove('text-blue-900');
        icon.classList.add('text-white');


        links.forEach(link => {
            link.classList.remove('text-slate-600', 'hover:text-blue-900');
            link.classList.add('text-white/80', 'hover:text-white');
        });
    }
});

// Mobile menu
const btn = document.getElementById('mobile-btn');
const menu = document.getElementById('mobile-menu');

let open = false;

function closeMenu() {
    open = false;
    menu.classList.add('opacity-0', '-translate-y-6', 'pointer-events-none');
    menu.classList.remove('opacity-100', 'translate-y-0');
    icon.classList.replace('fa-xmark', 'fa-bars-staggered');
}

btn.addEventListener('click', () => {
    open = !open;

    if (open) {
        menu.classList.remove('opacity-0', '-translate-y-6', 'pointer-events-none');
        menu.classList.add('opacity-100', 'translate-y-0');
        icon.classList.replace('fa-bars-staggered', 'fa-xmark');
    } else {
        closeMenu();
    }
});

// 🔑 CLAVE: cerrar al hacer click en cualquier link del menú
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});
// ==========================================
// END NAVBAR
// ==========================================




// ==========================================
// SERVICES CARDS ANIMATION
// ==========================================
const SERVICES = [
    // ===== TIPOS DE PUERTAS =====
    {
        id: 1,
        category: 'tipo',
        title: 'Puerta Seccional',
        description: 'Sistema de apertura vertical que optimiza el espacio. Fabricadas con paneles de alta densidad y acabado estético premium para residencias y almacenes.',
        icon: 'fa-solid fa-layer-group'
    },
    {
        id: 2,
        category: 'tipo',
        title: 'Puerta Corrediza',
        description: 'Solución ideal para ingresos vehiculares de gran ancho. Deslizamiento suave sobre rieles reforzados con sistemas anti-descarrilamiento de alta seguridad.',
        icon: 'fa-solid fa-right-left'
    },
    {
        id: 3,
        category: 'tipo',
        title: 'Puerta Peatonal Residencial',
        description: 'Accesos peatonales con cerraduras eléctricas integradas y acabados que armonizan con la fachada. Seguridad y elegancia para el ingreso principal.',
        icon: 'fa-solid fa-house-lock'
    },
    {
        id: 4,
        category: 'tipo',
        title: 'Puerta Batiente',
        description: 'Apertura clásica de una o dos hojas. Automatizadas con brazos hidráulicos o electromecánicos para un cierre hermético y controlado.',
        icon: 'fa-solid fa-door-open'
    },
    {
        id: 5,
        category: 'tipo',
        title: 'Puerta Enrollable',
        description: 'Máxima protección para comercios e industrias. Fabricadas en acero galvanizado con motores centrales o laterales para uso intensivo.',
        icon: 'fa-solid fa-door-closed'
    },

    // ===== SERVICIOS TÉCNICOS =====
    {
        id: 6,
        category: 'tecnico',
        title: 'Mantenimiento Preventivo',
        description: 'Revisión técnica programada para prolongar la vida útil del sistema y evitar fallas inesperadas.',
        icon: 'fa-solid fa-screwdriver-wrench'
    },
    {
        id: 7,
        category: 'tecnico',
        title: 'Reparación Especializada',
        description: 'Diagnóstico y solución de fallas en motores, rieles, sensores y sistemas de control.',
        icon: 'fa-solid fa-gears'
    },

    // ===== AUTOMATIZACIÓN =====
    {
        id: 8,
        category: 'automatizacion',
        title: 'Motores Automáticos',
        description: 'Sistemas de automatización para puertas residenciales e industriales con control remoto y sensores de seguridad.',
        icon: 'fa-solid fa-robot'
    },
    {
        id: 9,
        category: 'automatizacion',
        title: 'Controles de Acceso',
        description: 'Integración de controles remotos, lectores, sensores y sistemas inteligentes para accesos modernos.',
        icon: 'fa-solid fa-microchip'
    }
];


let activeTab = 'tipo';

const grid = document.getElementById('services-grid');
const tabs = document.querySelectorAll('.tab-btn');

const activeClasses = [
    'bg-blue-900',
    'text-white',
    'shadow-2xl',
    'shadow-blue-900/40',
    '-translate-y-0.5'
];

const inactiveClasses = [
    'bg-white',
    'border',
    'border-slate-200',
    'text-slate-500'
];

function renderServices() {
    grid.innerHTML = '';

    SERVICES
        .filter(service => service.category === activeTab)
        .forEach(service => {
            grid.innerHTML += `
            <div class="bg-white border border-slate-100 rounded-3xl p-10
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                        hover:-translate-y-2 transition-all group relative overflow-hidden flex flex-col">

                <div class="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-10 -mt-10
                            group-hover:bg-blue-50 transition-colors"></div>

                <div class="relative z-10 flex-grow">
                    <div class="w-20 h-20 bg-blue-50 text-blue-900 rounded-2xl
                                flex items-center justify-center mb-8
                                group-hover:bg-blue-900 group-hover:text-white transition-all">
                        <i class="${service.icon} text-3xl"></i>
                    </div>

                    <h4 class="text-2xl font-black text-blue-900 mb-4">
                        ${service.title}
                    </h4>

                    <p class="text-slate-500 leading-relaxed">
                        ${service.description}
                    </p>
                </div>

                <div class="mt-8 pt-6 border-t border-slate-50 relative z-10">
                    <div class="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Calidad Garantizada</span>
                    </div>
                </div>
            </div>
            `;
        });
}

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;

        tabs.forEach(tab => {
            tab.classList.remove(...activeClasses);
            tab.classList.add(...inactiveClasses);
        });

        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);

        renderServices();
    });
});

// Inicializar
renderServices();
