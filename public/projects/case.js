const projectOrder = ["aura", "lapadoctor", "flux", "kultur", "yandexpet", "prostolaser", "phonelab"];

const caseProjects = {
  aura: {
    theme: "#e9f2eb",
    cover: "/cases/aura-main.webp",
    meta: { type: ["Цифровой сервис", "Digital product"], scope: ["UX/UI-концепция", "UX/UI concept"], tools: "Figma" },
    title: ["AURA — платформа взаимопомощи", "AURA — Peer Support Platform"],
    kicker: ["01 // PRODUCT DESIGN & UX", "01 // PRODUCT DESIGN & UX"],
    lead: ["Тёмная и бережная цифровая среда, в которой люди могут делиться личными историями, находить поддержку и сохранять контроль над приватностью.", "A calm, dark digital space where people can share personal stories, find support, and stay in control of their privacy."],
    challenge: ["Объединить эмоционально сложный контент, личный профиль и механику поиска поддержки в одной понятной системе — без ощущения давления или перегруженности.", "Bring emotionally sensitive content, personal profiles, and support discovery into one clear system without making the experience feel overwhelming."],
    approach: ["Интерфейс построен вокруг спокойной типографики, мягких акцентов и последовательной навигации. Главная знакомит с историями сообщества, профиль показывает личный путь, а экран «мечты» превращает связи и цели в наглядную карту.", "The interface uses calm typography, subtle accents, and consistent navigation. The homepage introduces community stories, the profile captures a personal journey, and the dream view turns goals and connections into a visual map."],
    result: ["Подготовлена цельная визуальная концепция сервиса с тремя ключевыми сценариями, которую можно развивать в интерактивный продукт и дизайн-систему.", "A cohesive service concept with three core scenarios, ready to grow into an interactive product and design system."],
    points: [["Главная страница сообщества", "Community homepage"], ["Профиль пользователя", "User profile"], ["Визуальная карта связей", "Visual relationship map"]],
    gallery: [
      ["/cases/aura-main.webp", "Главная страница и истории сообщества", "Homepage and community stories"],
      ["/cases/aura-profile.webp", "Профиль, достижения и личная история", "Profile, achievements, and personal story"],
      ["/cases/aura-dream.webp", "Экран визуализации мечты", "Dream visualization screen"]
    ]
  },
  lapadoctor: {
    theme: "#edf4ee",
    cover: "/cases/lapadoctor-desktop.webp",
    meta: { type: ["Сайт услуги", "Service website"], scope: ["Веб-дизайн и адаптив", "Web design and responsive"], tools: "Figma • Tilda" },
    title: ["ЛапаДоктор — ветеринар на дом", "LapaDoctor — At-home Veterinary Care"],
    kicker: ["02 // WEB DESIGN", "02 // WEB DESIGN"],
    lead: ["Дружелюбный сайт выездной ветеринарной службы, который быстро объясняет услугу и помогает владельцу питомца перейти к записи.", "A friendly website for a mobile veterinary service that explains the offer quickly and guides pet owners toward booking."],
    challenge: ["В стрессовой ситуации посетителю важно сразу понять, как работает выезд врача, кому подходит услуга и какое действие сделать дальше.", "In a stressful situation, visitors need to understand immediately how the home visit works, who the service is for, and what to do next."],
    approach: ["Первый экран строится вокруг понятного обещания и заметной кнопки. Дальше сайт снимает основные сомнения, показывает преимущества домашнего приёма, знакомит со специалистами и последовательно ведёт к заявке.", "The hero centers on a clear promise and prominent action. The rest of the site answers common concerns, explains the benefits of home care, introduces specialists, and leads naturally to a request."],
    result: ["Созданы полные desktop- и mobile-макеты длинного лендинга с единой визуальной системой и продуманной последовательностью блоков.", "Complete desktop and mobile layouts were created for a long-form landing page with one consistent visual system and a clear content flow."],
    points: [["Полный desktop-макет", "Complete desktop layout"], ["Отдельный mobile-макет", "Dedicated mobile layout"], ["Сценарий записи на услугу", "Service booking journey"]],
    gallery: [
      ["/cases/lapadoctor-desktop.webp", "Полная версия сайта для компьютера", "Full desktop website"],
      ["/cases/lapadoctor-mobile.webp", "Мобильная версия со всеми блоками", "Complete mobile version"]
    ]
  },
  flux: {
    theme: "#eceaf6",
    cover: "/cases/flux-hook.webp",
    phoneCover: true,
    dark: true,
    meta: { type: ["Мобильный продукт", "Mobile product"], scope: ["UX/UI и промо-экраны", "UX/UI and store visuals"], tools: "Figma" },
    title: ["FLUX AI — мобильный интерфейс", "FLUX AI — Mobile Interface"],
    kicker: ["03 // AI & MOBILE UX/UI", "03 // AI & MOBILE UX/UI"],
    lead: ["Серия экранов AI-приложения: знакомство с продуктом, персонализация, генерация изображения, загрузка, подписка и промо-материалы для App Store.", "A complete set of AI app screens covering onboarding, personalization, image generation, loading, subscription, and App Store promotion."],
    challenge: ["Разложить сложную AI-функциональность на короткие, понятные шаги и сохранить выразительный визуальный язык на небольшом мобильном экране.", "Break complex AI functionality into short, understandable steps while keeping a distinctive visual language on a small mobile screen."],
    approach: ["Сценарий начинается с эмоционального знакомства, затем уточняет интересы пользователя и приводит к генерации. Тёмная основа, фиолетовое свечение и крупные изображения связывают продуктовые и рекламные экраны в одну систему.", "The journey starts with an emotional introduction, learns the user’s interests, and moves into generation. A dark base, violet glow, and large imagery connect product and promotional screens into one system."],
    result: ["Собран масштабируемый набор ключевых экранов приложения и локализованных промо-композиций, готовый для прототипирования и презентации продукта.", "A scalable set of core app screens and localized promotional compositions, ready for prototyping and product presentation."],
    points: [["Онбординг и опрос", "Onboarding and survey"], ["Генерация и состояния загрузки", "Generation and loading states"], ["Paywall и App Store-графика", "Paywall and App Store visuals"]],
    gallery: [
      ["/cases/flux-demo.webp", "Знакомство с генерацией изображений", "Introducing image generation"],
      ["/cases/flux-survey.webp", "Выбор интересов", "Selecting interests"],
      ["/cases/flux-style.webp", "Персонализация визуального стиля", "Visual style personalization"],
      ["/cases/flux-loading.webp", "Состояние генерации", "Generation state"],
      ["/cases/flux-social.webp", "Социальное доказательство", "Social proof"],
      ["/cases/flux-paywall.webp", "Экран подписки", "Subscription screen"],
      ["/cases/flux-store-create.webp", "App Store: создание с AI", "App Store: create with AI"],
      ["/cases/flux-store-enhance.webp", "App Store: улучшение фото", "App Store: photo enhancement"],
      ["/cases/flux-store-avatar.webp", "App Store: AI-аватар", "App Store: AI avatar"]
    ]
  },
  kultur: {
    theme: "#f3f0e9",
    cover: "/cases/kultur-desktop.webp",
    meta: { type: ["Редакционный сайт", "Editorial website"], scope: ["Веб-дизайн и адаптив", "Web design and responsive"], tools: "Figma" },
    title: ["Kultur — путешествие по Японии", "Kultur — Journey through Japan"],
    kicker: ["04 // EDITORIAL WEB DESIGN", "04 // EDITORIAL WEB DESIGN"],
    lead: ["Атмосферный лонгрид о традиционной Японии с выразительной фотографией, спокойным ритмом и редакционной подачей материала.", "An atmospheric long read about traditional Japan, shaped by expressive photography, calm pacing, and editorial storytelling."],
    challenge: ["Передать ощущение путешествия и культурного погружения, сохранив удобное чтение большого объёма материала на компьютере и телефоне.", "Create a sense of travel and cultural immersion while keeping long-form content comfortable to read on desktop and mobile."],
    approach: ["Крупные пейзажи задают эмоциональный ритм, контрастная антиква усиливает редакционный характер, а чередование светлых и тёмных секций помогает структурировать длинную историю.", "Large landscapes set the emotional rhythm, serif typography creates an editorial tone, and alternating light and dark sections organize the long narrative."],
    result: ["Подготовлены полные desktop- и mobile-версии лонгрида с сохранением композиции, иерархии и атмосферы на разных экранах.", "Complete desktop and mobile long-read versions were prepared while preserving composition, hierarchy, and atmosphere across screen sizes."],
    points: [["Длинная редакционная страница", "Long-form editorial page"], ["Desktop и mobile", "Desktop and mobile"], ["Работа с типографикой и фото", "Typography and photography"]],
    gallery: [
      ["/cases/kultur-desktop.webp", "Полная desktop-версия лонгрида", "Full desktop long read"],
      ["/cases/kultur-mobile.webp", "Адаптация истории для телефона", "Mobile story adaptation"]
    ]
  },
  yandexpet: {
    theme: "#f5f3df",
    cover: "/cases/yandex-pet-day.webp",
    meta: { type: ["Промо-сайт события", "Event promo website"], scope: ["Структура и веб-дизайн", "Structure and web design"], tools: "Figma" },
    title: ["Yandex Pet Day — промо-сайт", "Yandex Pet Day — Promo Website"],
    kicker: ["05 // WEB DESIGN & EVENT", "05 // WEB DESIGN & EVENT"],
    lead: ["Яркий промо-лендинг конференции о digital-продуктах и сервисах для животных — с программой, форматами участия и спикерами.", "A bold promo landing page for a conference about digital products and services for pets, featuring the agenda, participation formats, and speakers."],
    challenge: ["Собрать большой объём событийной информации в страницу, которая быстро объясняет тему конференции и помогает посетителю принять решение об участии.", "Organize a large amount of event information into a page that explains the conference quickly and helps visitors decide to attend."],
    approach: ["Контент разделён на контрастные карточки и крупные смысловые блоки. Чёрно-жёлтая палитра создаёт узнаваемый событийный характер, а повторяющиеся действия поддерживают путь к регистрации.", "Content is organized into high-contrast cards and large semantic blocks. The black-and-yellow palette creates a distinctive event identity, while repeated calls to action support the path to registration."],
    result: ["Создан полный прототип промо-сайта с программой, форматами участия, спикерами, партнёрами и финальным регистрационным блоком.", "A complete promo website prototype was created with agenda, participation formats, speakers, partners, and a final registration section."],
    points: [["Событийная структура", "Event-focused structure"], ["Программа и спикеры", "Agenda and speakers"], ["Выразительная модульная сетка", "Expressive modular grid"]],
    gallery: [["/cases/yandex-pet-day.webp", "Полный макет промо-сайта", "Complete promo website layout"]]
  },
  prostolaser: {
    theme: "#f8eef1",
    cover: "/cases/prosto-laser.webp",
    meta: { type: ["Редизайн сайта", "Website redesign"], scope: ["UX-аудит и UI", "UX review and UI"], tools: "Figma" },
    title: ["Prosto Laser — редизайн клиники", "Prosto Laser — Clinic Redesign"],
    kicker: ["06 // REDESIGN & MEDTECH", "06 // REDESIGN & MEDTECH"],
    lead: ["Светлый коммерческий интерфейс клиники лазерной эпиляции с понятным предложением, ценой и заметной записью на процедуру.", "A light commercial interface for a laser hair removal clinic with a clear offer, visible pricing, and a prominent booking path."],
    challenge: ["Усилить первый экран и помочь посетителю быстрее понять услугу, стоимость и преимущества, не перегружая медицинский сайт визуально.", "Strengthen the first screen and help visitors understand the service, price, and benefits without visually overloading a medical website."],
    approach: ["Иерархия перестроена вокруг главного предложения и записи. Мягкая розовая палитра, крупная типографика, карточка цены и блоки доверия делают страницу спокойной и коммерчески понятной.", "The hierarchy is rebuilt around the core offer and booking action. A soft pink palette, large typography, pricing card, and trust blocks make the page calm and commercially clear."],
    result: ["Подготовлен редизайн ключевых блоков главной страницы: первый экран, преимущества, услуги и элементы доверия.", "A redesign of the homepage’s key sections was prepared, including the hero, benefits, services, and trust elements."],
    points: [["Новая иерархия первого экрана", "New hero hierarchy"], ["Карточка цены и запись", "Pricing and booking card"], ["Светлая медицинская эстетика", "Light medical aesthetic"]],
    gallery: [["/cases/prosto-laser.webp", "Редизайн четырёх ключевых блоков", "Redesign of four key sections"]]
  },
  phonelab: {
    theme: "#e9f1f3",
    cover: "/cases/phonelab.webp",
    dark: true,
    meta: { type: ["Интернет-магазин", "Online store"], scope: ["Структура и веб-дизайн", "Structure and web design"], tools: "Figma • Tilda" },
    title: ["PhoneLab — магазин техники", "PhoneLab — Technology Store"],
    kicker: ["07 // E-COMMERCE & WEB DESIGN", "07 // E-COMMERCE & WEB DESIGN"],
    lead: ["Технологичная главная страница магазина электроники с крупной продуктовой подачей, категориями, преимуществами и отзывами.", "A technology-focused electronics store homepage with bold product presentation, categories, benefits, and reviews."],
    challenge: ["Показать ассортимент и преимущества магазина так, чтобы страница не превращалась в перегруженный каталог и сохраняла ясные точки входа к товарам.", "Present the assortment and store benefits without turning the homepage into an overloaded catalog, while keeping clear entry points to products."],
    approach: ["Тёмная синяя основа подчёркивает технологичность, бирюзовые акценты выделяют действия, а модульные карточки разделяют категории, цифры, преимущества и социальное доказательство.", "A dark blue base reinforces the technology theme, cyan accents highlight actions, and modular cards separate categories, metrics, benefits, and social proof."],
    result: ["Создан полный макет главной страницы интернет-магазина с логичной последовательностью от оффера и категорий до преимуществ, отзывов и контактов.", "A complete online store homepage was designed, moving logically from the offer and categories to benefits, reviews, and contacts."],
    points: [["Категории и товарные карточки", "Categories and product cards"], ["Коммерческие преимущества", "Commercial benefits"], ["Полная главная страница", "Complete homepage"]],
    gallery: [["/cases/phonelab.webp", "Полный макет главной страницы", "Complete homepage layout"]]
  }
};

const ui = {
  ru: {
    back: "← Все проекты", contact: "Обсудить проект", role: "Формат", scope: "Что сделано", tools: "Инструменты",
    storyKicker: "О ПРОЕКТЕ", storyTitle: "Задача и дизайн-решение", challenge: "Задача", approach: "Решение",
    galleryKicker: "МАКЕТЫ", galleryTitle: "Проект целиком", galleryLead: "Ниже — реальные экраны из исходных файлов проекта без декоративных заглушек.",
    outcomeKicker: "ИТОГ", outcomeTitle: "Что подготовлено", next: "Следующий проект", footer: "© 2026 Юрий Жильников"
  },
  en: {
    back: "← All projects", contact: "Discuss a project", role: "Format", scope: "Scope", tools: "Tools",
    storyKicker: "ABOUT THE PROJECT", storyTitle: "Challenge and design solution", challenge: "Challenge", approach: "Solution",
    galleryKicker: "SCREENS", galleryTitle: "The complete project", galleryLead: "Below are real screens exported from the source project files, with no decorative placeholders.",
    outcomeKicker: "OUTCOME", outcomeTitle: "What was delivered", next: "Next project", footer: "© 2026 Yuriy Zhilnikov"
  }
};

function pick(value, lang) { return Array.isArray(value) ? value[lang === "en" ? 1 : 0] : value; }

function renderCase() {
  const id = document.body.dataset.caseId;
  const project = caseProjects[id];
  if (!project) return;
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") === "en" ? "en" : "ru";
  const t = ui[lang];
  const nextId = projectOrder[(projectOrder.indexOf(id) + 1) % projectOrder.length];
  const nextProject = caseProjects[nextId];
  document.documentElement.lang = lang;
  document.documentElement.style.setProperty("--project-bg", project.theme);
  document.title = `${pick(project.title, lang)} — ${lang === "en" ? "Yuriy Zhilnikov" : "Юрий Жильников"}`;

  document.getElementById("case-root").innerHTML = `
    <header class="case-header">
      <div class="case-header__inner">
        <a class="brand" href="/portfolio.html?lang=${lang}#work">${lang === "en" ? "YURIY ZHILNIKOV" : "ЮРИЙ ЖИЛЬНИКОВ"}<small>${lang === "en" ? "Web designer" : "Веб-дизайнер"}</small></a>
        <div class="case-header__actions">
          <a href="/portfolio.html?lang=${lang}#work">${t.back}</a>
          <button id="lang-switch" type="button">${lang === "en" ? "EN / RU" : "RU / EN"}</button>
          <a href="/portfolio.html?lang=${lang}#contact">${t.contact}</a>
        </div>
      </div>
    </header>
    <main>
      <section class="case-hero case-shell">
        <div class="case-kicker">${pick(project.kicker, lang)}</div>
        <h1>${pick(project.title, lang)}</h1>
        <p class="case-hero__lead">${pick(project.lead, lang)}</p>
        <div class="case-meta">
          <div><span>${t.role}</span><strong>${pick(project.meta.type, lang)}</strong></div>
          <div><span>${t.scope}</span><strong>${pick(project.meta.scope, lang)}</strong></div>
          <div><span>${t.tools}</span><strong>${project.meta.tools}</strong></div>
        </div>
      </section>
      <section class="case-cover case-shell ${project.phoneCover ? "case-cover--phone" : ""}">
        <div class="case-cover__window"><img src="${project.cover}" alt="${pick(project.title, lang)}" fetchpriority="high"></div>
      </section>
      <section class="case-story case-shell">
        <div class="case-story__heading"><div class="section-kicker">${t.storyKicker}</div><h2>${t.storyTitle}</h2></div>
        <div class="case-story__grid">
          <article class="story-card"><span>01</span><h3>${t.challenge}</h3><p>${pick(project.challenge, lang)}</p></article>
          <article class="story-card"><span>02</span><h3>${t.approach}</h3><p>${pick(project.approach, lang)}</p></article>
        </div>
      </section>
      <section class="case-gallery case-shell">
        <div class="case-gallery__heading"><div class="section-kicker">${t.galleryKicker}</div><h2>${t.galleryTitle}</h2><p>${t.galleryLead}</p></div>
        <div class="gallery-grid ${id === "flux" ? "gallery-grid--phones" : ""}">
          ${project.gallery.map((item) => `<figure class="gallery-item ${project.dark ? "gallery-item--dark" : ""}"><img src="${item[0]}" alt="${pick([item[1], item[2]], lang)}" loading="lazy"><figcaption>${pick([item[1], item[2]], lang)}</figcaption></figure>`).join("")}
        </div>
      </section>
      <section class="case-outcome case-shell">
        <div class="case-outcome__grid"><div><div class="section-kicker">${t.outcomeKicker}</div><h2>${t.outcomeTitle}</h2><p>${pick(project.result, lang)}</p></div><ul>${project.points.map((point) => `<li>${pick(point, lang)}</li>`).join("")}</ul></div>
      </section>
      <nav class="case-next case-shell" aria-label="${t.next}"><a href="/projects/${nextId}.html?lang=${lang}">${t.next}: ${pick(nextProject.title, lang)} →</a></nav>
    </main>
    <footer class="case-footer"><div class="case-footer__inner case-shell"><span>${t.footer}</span><a href="/portfolio.html?lang=${lang}#contact">${t.contact} ↗</a></div></footer>`;

  document.getElementById("lang-switch").addEventListener("click", () => {
    const nextLang = lang === "en" ? "ru" : "en";
    window.location.search = `?lang=${nextLang}`;
  });
}

renderCase();
