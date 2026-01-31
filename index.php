<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puertas Seguras JLC - Expertos en Puertas Automáticas</title>
    <link rel="shortcut icon" href="./img/logo_puertasseguras.png" type="image/x-icon">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- My CSS -->
    <link rel="stylesheet" href="./style.css">

</head>

<body class="bg-slate-50 text-slate-900">

    <!-- NAVBAR -->
    <nav id="main-nav" class="fixed w-full z-50 transition-all duration-500 bg-transparent py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">

                <!-- Logo -->
                <div class="flex items-center space-x-3 cursor-pointer"
                    onclick="window.scrollTo({top:0, behavior:'smooth'})">

                    <div class="bg-white p-2 rounded-xl shadow-lg">
                        <img src="./img/logo_puertasseguras.png" alt="Puertas Seguras JLC"
                            class="h-10 w-auto object-contain">
                    </div>

                    <div class="flex flex-col -space-y-1">
                        <span id="nav-title" class="text-xl font-black tracking-tight text-white transition-colors">
                            Especialistas en
                        </span>
                        <span id="nav-subtitle"
                            class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 transition-colors">
                            puertas automaticas
                        </span>
                    </div>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#inicio"
                        class="nav-item text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Inicio</a>
                    <a href="#servicios"
                        class="nav-item text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Servicios</a>
                    <a href="#nosotros"
                        class="nav-item text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Nosotros</a>
                    <a href="#proyectos"
                        class="nav-item text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Proyectos</a>
                    <a href="#ubicacion"
                        class="nav-item text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Ubicaci&oacute;n</a>
                    <a href="#contacto"
                        class="nav-item text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Contacto</a>
                    <a href="https://wa.me/51907122035" target="_blank"
                        class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-orange-500/30 flex items-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        Contacto
                    </a>
                </div>

                <!-- Mobile Button -->
                <button id="mobile-btn" class="md:hidden text-2xl p-2 rounded-xl text-white transition-colors">
                    <i id="mobile-icon" class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
        </div>

        <div id="mobile-menu" class="md:hidden absolute top-full mt-3 w-full bg-white shadow-2xl
         opacity-0 -translate-y-6 pointer-events-none
         transition-all duration-300 ease-out">

            <div class="px-4 pt-6 pb-8 space-y-2 border-t border-slate-100">

                <a href="#inicio" class="block px-4 py-4 text-base font-bold text-slate-700
                    hover:text-blue-900 hover:bg-slate-50 rounded-2xl
                    transition-all">Inicio</a>
                <a href="#servicios" class="block px-4 py-4 text-base font-bold text-slate-700
                    hover:text-blue-900 hover:bg-slate-50 rounded-2xl
                    transition-all">Servicios</a>
                <a href="#nosotros" class="block px-4 py-4 text-base font-bold text-slate-700
                    hover:text-blue-900 hover:bg-slate-50 rounded-2xl
                    transition-all">Nosotros</a>
                <a href="#proyectos" class="block px-4 py-4 text-base font-bold text-slate-700
                    hover:text-blue-900 hover:bg-slate-50 rounded-2xl
                    transition-all">Proyectos</a>
                <a href="#ubicacion" class="block px-4 py-4 text-base font-bold text-slate-700
                    hover:text-blue-900 hover:bg-slate-50 rounded-2xl
                    transition-all">Ubicaci&oacute;n</a>
                <a href="#contacto" class="block px-4 py-4 text-base font-bold text-slate-700
                    hover:text-blue-900 hover:bg-slate-50 rounded-2xl
                    transition-all">Contacto</a>

                <!-- BOTÓN CONTACTO -->
                <div class="pt-6">
                    <a href="https://wa.me/51907122035" target="_blank" class="flex items-center justify-center gap-3 w-full
                        bg-orange-500 hover:bg-orange-600 text-white
                        px-4 py-5 rounded-2xl font-black uppercase tracking-widest
                        shadow-xl shadow-orange-500/30 transition-all">
                        <i class="fa-brands fa-whatsapp text-xl"></i>
                        Contactar WhatsApp
                    </a>
                </div>

            </div>
        </div>

        </div>
    </nav>


    <!-- HERO -->
    <section id="inicio" class="relative min-h-screen flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="./img/hero.jpg" class="w-full h-full object-cover" alt="Hero">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/85 to-blue-950/40"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-white pt-28">
            <div class="max-w-3xl animate-fade-in">
                <div
                    class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase mb-6 backdrop-blur-md">
                    <i class="fa-solid fa-bolt-lightning animate-pulse"></i><span>Líderes en Automatización</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tighter uppercase">Seguridad
                    <br /><span class="text-orange-500 italic">sin límites</span>
                </h1>
                <p class="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl font-light">Ingeniería
                    especializada en <span class="font-semibold text-white">puertas automáticas</span> para el sector
                    residencial e industrial.</p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/51907122035" target="_blank"
                        class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-500/40 text-center transition-all hover:-translate-y-1">CONSULTA
                        GRATUITA</a>
                    <a href="#servicios"
                        class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-center backdrop-blur-md">SERVICIOS</a>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICIOS -->
    <section class="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="servicios">

        <!-- HEADER -->
        <div class="text-center mb-16">
            <h2 class="text-orange-500 text-sm font-black tracking-[0.3em] uppercase mb-4">
                Especialistas en Accesos
            </h2>
            <h3 class="text-4xl md:text-5xl font-black text-blue-900 mb-6">
                Nuestras Soluciones Integrales
            </h3>
            <p class="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Soluciones profesionales en fabricación, instalación y mantenimiento de accesos industriales y
                comerciales.
            </p>
        </div>

        <!-- SERVICIOS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <!-- Puerta Seccional -->
            <div class="p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-blue-900 mb-3">Puerta Seccional</h4>
                <p class="text-slate-600 leading-relaxed">
                    Ideal para espacios industriales y comerciales, optimiza el área y brinda alta seguridad.
                </p>
            </div>

            <!-- Puerta Enrollable -->
            <div class="p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-blue-900 mb-3">Puerta Enrollable</h4>
                <p class="text-slate-600 leading-relaxed">
                    Solución compacta y resistente para locales comerciales y almacenes.
                </p>
            </div>

            <!-- Puerta Batiente -->
            <div class="p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-blue-900 mb-3">Puerta Batiente</h4>
                <p class="text-slate-600 leading-relaxed">
                    Accesos funcionales para uso residencial, comercial o industrial.
                </p>
            </div>

            <!-- Puerta Corrediza -->
            <div class="p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-blue-900 mb-3">Puerta Corrediza</h4>
                <p class="text-slate-600 leading-relaxed">
                    Diseñadas para grandes accesos, combinan robustez y eficiencia operativa.
                </p>
            </div>

            <!-- Mantenimiento -->
            <div class="p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-blue-900 mb-3">
                    Mantenimiento Correctivo y Preventivo
                </h4>
                <p class="text-slate-600 leading-relaxed">
                    Diagnóstico, reparación y mantenimiento para garantizar la continuidad operativa.
                </p>
            </div>

            <!-- Automatización -->
            <div class="p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-blue-900 mb-3">Accesos Automáticos</h4>
                <p class="text-slate-600 leading-relaxed">
                    Automatización de accesos con sistemas confiables y seguros.
                </p>
            </div>

        </div>
    </section>



    <!-- NOSOTROS -->
    <section id="nosotros" class="py-28 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-20">

                <!-- Imagen -->
                <div class="lg:w-1/2 relative">
                    <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                        <img src="./img/nosotros2.webp" alt="Equipo técnico Puertas Seguras JLC"
                            class="w-full h-full object-cover min-h-[520px]" />
                        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    </div>

                    <!-- Badge experiencia -->
                    <div
                        class="absolute -bottom-10 -right-6 bg-orange-500 p-10 rounded-3xl shadow-2xl z-20 hidden md:block rotate-3">
                        <p class="text-white text-6xl font-black leading-none">10+</p>
                        <p class="text-white font-black uppercase tracking-widest text-[10px] mt-1">
                            Años de Experiencia
                        </p>
                    </div>
                </div>

                <!-- Contenido -->
                <div class="lg:w-1/2">
                    <h2 class="text-orange-500 text-sm font-black tracking-widest uppercase mb-4">
                        Trayectoria
                    </h2>

                    <h3 class="text-4xl md:text-5xl font-black text-blue-900 mb-8 leading-tight uppercase">
                        Ingeniería para su
                        <span class="text-orange-500 block">tranquilidad</span>
                    </h3>

                    <p class="text-slate-600 text-lg mb-12 leading-relaxed font-light max-w-xl">
                        En <strong>Puertas Seguras JLC</strong> construimos confianza a través de la
                        precisión técnica. Aplicamos ingeniería especializada, materiales certificados
                        y tecnología de vanguardia para garantizar accesos seguros, durables y eficientes.
                    </p>

                    <!-- Valores -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div class="flex gap-4 items-start">
                            <div
                                class="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                            <div>
                                <h4 class="font-black text-blue-900 uppercase text-xs mb-1">
                                    Seguridad
                                </h4>
                                <p class="text-sm text-slate-500">
                                    Protocolos certificados y control técnico riguroso.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <div
                                class="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                <i class="fa-solid fa-user-tie"></i>
                            </div>
                            <div>
                                <h4 class="font-black text-blue-900 uppercase text-xs mb-1">
                                    Expertos
                                </h4>
                                <p class="text-sm text-slate-500">
                                    Técnicos especializados y capacitación constante.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- TECNOLOGIA Y LOGOS -->
    <section id="tecnologia" class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">

            <!-- Encabezado -->
            <div class="max-w-3xl mx-auto text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-black text-blue-900">
                    Tecnología de Vanguardia
                </h2>
                <p class="mt-6 text-lg text-slate-600 leading-relaxed">
                    Sistemas y accesorios electrónicos certificados internacionalmente,
                    seleccionados para garantizar seguridad, automatización y confiabilidad.
                </p>
            </div>

            <!-- Grid de marcas -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-20 gap-y-24">

                <div class="flex items-center justify-center">
                    <img src="./img/logo_SmartLift.webp" alt="SmartLift" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_nice.webp" alt="Nice" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_centurion.webp" alt="Centurion" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_hiland.webp" alt="Hiland" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_KTH.webp" alt="KTH" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_record.webp" alt="Record" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_v2.webp" alt="V2" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_VDS.webp" alt="VDS" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_ZK.webp" alt="ZK" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

                <div class="flex items-center justify-center">
                    <img src="./img/logo_almatic.webp" alt="Almatic" class="h-16 md:h-20 lg:h-24 object-contain">
                </div>

            </div>

        </div>
    </section>


    <!-- PROYECTOS -->
    <section id="proyectos" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">

            <div class="text-center mb-16">
                <h2 class="text-orange-500 text-sm font-black uppercase tracking-widest mb-4">
                    Portafolio
                </h2>
                <h3 class="text-4xl md:text-5xl font-black text-blue-900">
                    Nuestros Trabajos
                </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_corrediza.webp" alt="Puerta residencial moderna"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Corrediza
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_enrrollable.webp" alt="Puerta industrial para almacén"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Enrrollable
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_seccional.webp" alt="Garaje automatizado inteligente"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Seccional
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_batiente.webp" alt="Garaje automatizado inteligente"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Batiente
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_casa_1.webp" alt="Garaje automatizado inteligente"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Principal de Casa
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_casa_2.webp" alt="Garaje automatizado inteligente"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Principal de Casa
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_casa_3.webp" alt="Garaje automatizado inteligente"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Principal de Casa
                        </h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img src="./img/puerta_casa_4.webp" alt="Garaje automatizado inteligente"
                        class="w-full h-[280px] object-cover" />
                    <div class="p-6 text-left">
                        <span class="text-orange-500 text-xs font-black uppercase tracking-widest">
                            Trabajo de calidad
                        </span>
                        <h4 class="text-blue-900 text-xl font-black mt-2">
                            Puerta Principal de Casa
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <!-- UBICACION -->
    <section id="ubicacion" class="py-24 bg-slate-50">
        <div class="max-w-5xl mx-auto px-6">

            <!-- HEADER -->
            <div class="text-center mb-20">
                <h2 class="text-orange-500 text-sm font-black tracking-[0.3em] uppercase mb-4">
                    Ubicación Estratégica
                </h2>
                <h3 class="text-4xl md:text-5xl font-black text-blue-900 mb-6">
                    ¿Dónde nos encuentras?
                </h3>
                <p class="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Estamos ubicados en el Callao para brindar una cobertura rápida a toda la zona de Lima y
                    alrededores.
                </p>
            </div>

            <!-- INFO -->
            <div class="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-10 mb-16">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <!-- Dirección -->
                    <div>
                        <h4 class="text-xs uppercase tracking-widest font-black text-orange-500 mb-4">
                            Dirección Principal
                        </h4>
                        <p class="text-lg font-bold text-blue-900 leading-snug">
                            Mariátegui Mz C1 Lote 9 – Comité 26
                        </p>
                        <p class="text-sm text-slate-500 mt-1">
                            Santa Rosa, Callao 07026, Perú
                        </p>
                    </div>

                    <!-- Horario -->
                    <div>
                        <h4 class="text-xs uppercase tracking-widest font-black text-orange-500 mb-4">
                            Horario de Atención
                        </h4>
                        <p class="text-blue-900 font-bold">
                            Lunes a Sábado
                        </p>
                        <p class="text-slate-600 mb-2">
                            8:30 am – 5:30 pm
                        </p>
                        <p class="text-orange-600 font-semibold">
                            Domingos: Cerrado
                        </p>
                    </div>

                    <!-- Contacto -->
                    <div>
                        <h4 class="text-xs uppercase tracking-widest font-black text-orange-500 mb-4">
                            Contacto
                        </h4>
                        <p class="text-blue-900 font-bold">
                            Central
                        </p>
                        <p class="text-slate-600 mb-3">
                            +51 907 122 035
                        </p>
                        <p class="text-blue-900 font-bold">
                            Email
                        </p>
                        <p class="text-slate-600 break-all">
                            puertasseguras13@gmail.com
                        </p>
                    </div>

                </div>
            </div>

            <!-- MAPA -->
            <div class="h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9848601644553!2d-77.11551779018416!3d-12.044562488142821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbfdc2a092fe7ea1%3A0x20c0ff9b81c3fd22!2spuertassegurasjlc!5e0!3m2!1ses-419!2spe!4v1769809493776!5m2!1ses-419!2spe"
                    class="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    allowfullscreen>
                </iframe>
            </div>

        </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">

            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-orange-500 text-sm font-black tracking-widest uppercase mb-4">
                    Contáctanos
                </h2>
                <h3 class="text-4xl md:text-5xl font-black text-blue-900 mb-6">
                    Solicita una cotización
                </h3>
                <p class="max-w-2xl mx-auto text-slate-600 text-lg">
                    Déjanos tus datos y un especialista se comunicará contigo a la brevedad.
                </p>
            </div>

            <!-- Formulario -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <!-- INFO -->
                <div class="space-y-6">
                    <h4 class="text-2xl font-black text-blue-900">
                        Atención directa y personalizada
                    </h4>
                    <p class="text-slate-600">
                        Nuestro equipo técnico evalúa cada proyecto para ofrecerte
                        la mejor solución en seguridad y automatización.
                    </p>

                    <a href="https://wa.me/51907122035" target="_blank" class="inline-flex items-center gap-4 bg-orange-500 text-white px-8 py-5
                  rounded-2xl font-black uppercase tracking-widest text-sm
                  shadow-xl shadow-orange-500/30">
                        <i class="fa-brands fa-whatsapp text-2xl"></i>
                        Contactar por WhatsApp
                    </a>
                </div>

                <!-- LOGICA DE ENVIO -->
                <?php if (isset($_GET['estado'])): ?>

                <?php if ($_GET['estado'] === 'ok'): ?>
                <div class="mb-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-2xl font-bold">
                    Tu mensaje fue enviado correctamente.
                    Nos comunicaremos contigo a la brevedad.
                </div>
                <?php endif; ?>

                <?php if ($_GET['estado'] === 'error'): ?>
                <div class="mb-6 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-2xl font-bold">
                    Ocurrió un problema al enviar tu mensaje.
                    Por favor contáctanos por WhatsApp o por nuestros canales habituales.
                </div>
                <?php endif; ?>

                <?php endif; ?>


                <!-- FORM -->
                <form action="./enviar.php" method="POST" class="bg-slate-50 p-10 rounded-3xl shadow-xl space-y-6">

                    <input type="text" name="nombre" placeholder="Nombre completo" required
                        class="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none">

                    <input type="email" name="email" placeholder="Correo electrónico" required
                        class="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none">

                    <input type="tel" name="telefono" placeholder="Teléfono" required
                        class="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none">

                    <textarea name="mensaje" rows="4" placeholder="Cuéntanos sobre tu proyecto" required
                        class="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none"></textarea>

                    <button type="submit" class="w-full bg-blue-900 hover:bg-blue-800 text-white py-5
                       rounded-xl font-black uppercase tracking-widest text-sm
                       transition-all">
                        Enviar solicitud
                    </button>
                </form>

            </div>

        </div>
    </section>


    <!-- FOOTER -->
    <footer class="bg-blue-950 text-slate-400 pt-24 pb-12 border-t-4 border-orange-500">
        <div class="max-w-7xl mx-auto px-6">

            <!-- CONTENIDO PRINCIPAL -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                <!-- MARCA -->
                <div>
                    <div class="flex items-center gap-4 mb-8">
                        <div class="bg-white p-2 rounded-xl shadow-lg">
                            <img src="./img/logo_puertasseguras.png" alt="Puertas Seguras JLC"
                                class="h-12 w-auto object-contain">
                        </div>
                        <div>
                            <p class="text-white text-xl font-black leading-tight">
                                Especialistas en
                            </p>
                            <p class="text-blue-300 text-xl font-black leading-tight">
                                Puertas Automáticas
                            </p>
                        </div>
                    </div>

                    <p class="font-light leading-relaxed text-slate-400">
                        Especialistas en ingeniería de accesos, automatización y seguridad para
                        proyectos residenciales, comerciales e industriales.
                    </p>
                </div>

                <!-- SERVICIOS -->
                <div>
                    <h4 class="text-white font-black uppercase tracking-widest text-xs mb-8">
                        Especialidades
                    </h4>
                    <ul class="space-y-4 text-sm font-bold">
                        <li><a href="#proyectos" class="hover:text-orange-500 transition-colors">Puertas Seccionales</a>
                        </li>
                        <li><a href="#proyectos" class="hover:text-orange-500 transition-colors">Puertas Enrollables</a>
                        </li>
                        <li><a href="#proyectos" class="hover:text-orange-500 transition-colors">Automatización</a></li>
                        <li><a href="#proyectos" class="hover:text-orange-500 transition-colors">Mantenimiento
                                Técnico</a></li>
                    </ul>
                </div>

                <!-- CONTACTO -->
                <div>
                    <h4 class="text-white font-black uppercase tracking-widest text-xs mb-8">
                        Atención Directa
                    </h4>

                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                        <div>
                            <p class="text-[10px] uppercase font-black text-slate-500 mb-1">
                                WhatsApp
                            </p>
                            <p class="text-white text-xl font-black">
                                +51 907 122 035
                            </p>
                        </div>

                        <a href="https://wa.me/51907122035" target="_blank" class="flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-600
                    text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest
                    transition-all shadow-lg shadow-orange-500/30">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            Contactar ahora
                        </a>
                    </div>
                </div>

                <!-- UBICACIÓN -->
                <div>
                    <h4 class="text-white font-black uppercase tracking-widest text-xs mb-8">
                        Ubicación
                    </h4>
                    <div class="flex items-start gap-4 text-sm">
                        <i class="fa-solid fa-location-dot text-orange-500 text-lg mt-1"></i>
                        <p>
                            Santa Rosa – Callao<br>
                            Lima, Perú
                        </p>
                    </div>
                </div>

            </div>

            <!-- COPYRIGHT -->
            <div class="pt-10 border-t border-white/10 flex flex-col md:flex-row
                justify-between items-center gap-6 text-[11px]
                font-bold uppercase tracking-widest text-slate-500">

                <p class="text-center md:text-left">
                    &copy; 2026 Puertas Seguras JLC. Todos los derechos reservados.
                </p>

                <p>
                    Desarrollo web por
                    <a href="https://tu-sitioweb.com" target="_blank"
                        class="text-orange-500 hover:text-orange-400 font-black transition-colors">
                        tu-sitioweb.com
                    </a>
                </p>

            </div>

        </div>
    </footer>


    <!-- WHATSAPP BUTTON -->
    <a href="https://wa.me/51907122035" target="_blank"
        class="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110">
        <i class="fa-brands fa-whatsapp text-4xl"></i>
    </a>

    <!-- SCRIPTS -->
    <script src="script.js"></script>
</body>

</html>