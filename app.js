const translations = {
    ru: {
        nav_home: "Главная",
        nav_plan: "План 0-этажа",
        nav_gallery: "Галерея",
        nav_catalog: "Квартиры",
        btn_add: "Разместить объявление",
        btn_buy: "Купить квартиру",
        hero_title: "Fortuna Parkside",
        hero_location: "Gazipaşa, Antalya, Türkiye",
        hero_desc: "Премиальный жилой комплекс с бассейном, сауной, панорамным фитнес-центром и закрытой благоустроенной территорией у моря.",
        feature_floors: "5 Этажей",
        feature_spa: "0 Этаж",
        stat_floors: "Этажей",
        stat_spa: "SPA & Фитнес",
        stat_pool: "Бассейн и Парк",
        btn_enter: "Зайти внутрь дома",
        floor_cta: "Осмотреть 0-й этаж",
        floor_kicker: "ПРОСТРАНСТВО ДЛЯ ЖИЗНИ",
        zone_tag: "ВЫБРАННАЯ ЗОНА",
        floor_heading: "Интерактивный навигатор: 0-й Этаж",
        floor_sub: "Нажмите на любую зону плана, чтобы совершить виртуальный осмотр",
        gallery_title: "Галерея Fortuna Parkside",
        gallery_sub: "Визуальный тур по территории, резиденции и удобствам комплекса",
        z_entrance: "Главный вход",
        z_elevators: "2 Лифта (1-5 эт)",
        z_infostand: "Инфо-стенд",
        z_stairs: "Лестница наверх",
        z_lounge: "Холл & Зона отдыха",
        z_sauna: "Финская Сауна",
        z_corridor: "Проход в спортзал",
        z_gym: "Панорамный Фитнес-зал",
        zone_default_title: "Выберите объект на схеме",
        zone_default_desc: "Кликните по любой зоне 0-го этажа, чтобы посмотреть детали.",
        donate_title: "Поддержите развитие проекта",
        donate_desc: "Если вам нравится сервис, вы можете отправить чаевые или донат разработчику."
    },
    tr: {
        nav_home: "Ana Sayfa",
        nav_plan: "Zemin Kat",
        nav_gallery: "Galeri",
        nav_catalog: "Daireler",
        btn_add: "İlan Ekle",
        btn_buy: "Daire Satın Al",
        hero_title: "Fortuna Parkside",
        hero_location: "Gazipaşa, Antalya, Türkiye",
        hero_desc: "Havuz, sauna, panoramik fitness merkezi ve deniz kenarında kapalı peyzajlı alana sahip lüks konut kompleksi.",
        feature_floors: "5 Kat",
        feature_spa: "Zemin Kat",
        stat_floors: "Katlı",
        stat_spa: "SPA & Fitness",
        stat_pool: "Havuz ve Park",
        btn_enter: "Binaya Gir",
        floor_cta: "Zemin Katı Keşfet",
        floor_kicker: "YAŞAM ALANI",
        zone_tag: "SEÇİLEN ALAN",
        floor_heading: "İnteraktif Navigatör: Zemin Kat",
        floor_sub: "Sanal tur yapmak için plandaki herhangi bir alana tıklayın",
        gallery_title: "Fortuna Parkside Galerisi",
        gallery_sub: "Kompleksin alanında ve tesislerinde görsel bir tur",
        z_entrance: "Ana Giriş",
        z_elevators: "2 Asansör (1-5 Kat)",
        z_infostand: "Bilgilendirme Panosu",
        z_stairs: "Yukarı Merdiven",
        z_lounge: "Lobi & Dinlenme Alanı",
        z_sauna: "Fin Saunası",
        z_corridor: "Spor Salonu Geçidi",
        z_gym: "Panoramik Fitness Salonu",
        zone_default_title: "Plândan bir nesne seçin",
        zone_default_desc: "Detayları görmek için zemin kattaki herhangi bir bölgeye tıklayın.",
        donate_title: "Projeyi Destekleyin",
        donate_desc: "Hizmeti beğendiyseniz, geliştiriciye bahşiş veya bağış gönderebilirsiniz."
    },
    en: {
        nav_home: "Home",
        nav_plan: "0-Floor Plan",
        nav_gallery: "Gallery",
        nav_catalog: "Apartments",
        btn_add: "Post Ad",
        btn_buy: "Buy Apartment",
        hero_title: "Fortuna Parkside",
        hero_location: "Gazipaşa, Antalya, Türkiye",
        hero_desc: "Premium residential complex with pool, sauna, panoramic fitness center, and private landscaped area near the sea.",
        feature_floors: "5 Floors",
        feature_spa: "Ground Floor",
        stat_floors: "Floors",
        stat_spa: "SPA & Fitness",
        stat_pool: "Pool & Park",
        btn_enter: "Enter the Building",
        floor_cta: "Explore the ground floor",
        floor_kicker: "SPACE TO LIVE",
        zone_tag: "SELECTED AREA",
        floor_heading: "Interactive Navigator: 0-Floor",
        floor_sub: "Click on any zone of the plan to take a virtual tour",
        gallery_title: "Fortuna Parkside Gallery",
        gallery_sub: "A visual tour of the complex grounds, residence, and amenities",
        z_entrance: "Main Entrance",
        z_elevators: "2 Elevators (1-5 Fl)",
        z_infostand: "Info Stand",
        z_stairs: "Stairs Up",
        z_lounge: "Lobby & Lounge",
        z_sauna: "Finnish Sauna",
        z_corridor: "Gym Passage",
        z_gym: "Panoramic Gym",
        zone_default_title: "Select an object on the plan",
        zone_default_desc: "Click on any 0-floor zone to view details.",
        donate_title: "Support the Project",
        donate_desc: "If you like the service, you can leave a tip or donation to the developer."
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
}

function showZoneDetails(zoneKey) {
    const title = document.getElementById('zoneTitle');
    const desc = document.getElementById('zoneDesc');
    const imageContainer = document.getElementById('zoneImageContainer');
    const details = {
        entrance: {
            title: "Главный Вход",
            desc: "Консьерж-зона, электронный доступ, прозрачные стеклянные двери.",
            img: "photo2.jpg"
        },
        elevators: {
            title: "Лифтовая Зона",
            desc: "2 бесшумных скоростных лифта с выходом на подземный этаж и жилые этажи 1–5.",
            img: "photo1.jpg"
        },
        infostand: {
            title: "Информационный Стенд",
            desc: "Расписание обслуживания, контакты управляющей компании и новости ЖК.",
            img: "photo10.jpg"
        },
        stairs: {
            title: "Центральная Лестница",
            desc: "Удобный лестничный марш с панорамным освещением и мраморной отделкой.",
            img: "photo4.jpg"
        },
        lounge: {
            title: "Холл & Зона Отдыха",
            desc: "Мягкая диванная зона для приема гостей, ожидания и отдыха.",
            img: "photo5.jpg"
        },
        sauna: {
            title: "Финская Сауна",
            desc: "Просторная парная из натурального кедра с душевыми и раздевалкой.",
            img: "photo9.jpg"
        },
        passage: {
            title: "Проход в спортзал",
            desc: "Коридор соединяет зону отдыха и фитнес-зал.",
            img: "photo10.jpg"
        },
        gym: {
            title: "Панорамный Фитнес-зал",
            desc: "Современные беговые дорожки, силовые тренажеры и гантельный ряд.",
            img: "photo7.jpg"
        }
    };
    if (details[zoneKey]) {
        title.textContent = details[zoneKey].title;
        desc.textContent = details[zoneKey].desc;
        if (imageContainer) {
            imageContainer.innerHTML = `<img src="${details[zoneKey].img}" alt="${details[zoneKey].title}" style="width:100%; height:200px; object-fit:cover; border-radius:12px; margin-top:15px; border:1px solid rgba(255,255,255,0.1);">`;
        }
    }
}
