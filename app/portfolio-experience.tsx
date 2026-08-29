"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  number: string;
  title: string;
  category: "Айдентика" | "Digital" | "Арт-дирекшн";
  year: string;
  note: string;
  art: string;
};

const projects: Project[] = [
  {
    id: "orbit",
    number: "01",
    title: "ОРБИТА",
    category: "Айдентика",
    year: "2026",
    note: "Айдентика фестиваля независимой музыки",
    art: "orbit",
  },
  {
    id: "tactile",
    number: "02",
    title: "ТАКТИЛЬНО",
    category: "Digital",
    year: "2025",
    note: "Сайт для студии предметного дизайна",
    art: "tactile",
  },
  {
    id: "sever",
    number: "03",
    title: "СЕВЕР",
    category: "Арт-дирекшн",
    year: "2025",
    note: "Кампания для локального fashion-бренда",
    art: "north",
  },
  {
    id: "pulse",
    number: "04",
    title: "ПУЛЬС",
    category: "Digital",
    year: "2024",
    note: "Диджитал-оболочка культурного медиа",
    art: "pulse",
  },
];

const filters = ["Все", "Айдентика", "Digital", "Арт-дирекшн"] as const;

type Destination = "works" | "about" | "contact";

const destinationCopy: Record<Destination, { route: string; arrived: string }> = {
  works: {
    route: "к избранным работам",
    arrived: "Мы пришли! Здесь мои любимые проекты.",
  },
  about: {
    route: "познакомиться поближе",
    arrived: "Вот мы и здесь. Расскажу немного о дизайнере.",
  },
  contact: {
    route: "к контактам",
    arrived: "Готово! Здесь можно обсудить новый проект.",
  },
};

function getTimedGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Доброе утро";
  if (hour >= 12 && hour < 18) return "Добрый день";
  return "Добрый вечер";
}

const scribbles = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

export function PortfolioExperience() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Все");
  const [message, setMessage] = useState(
    () => `${getTimedGreeting()}! Я Роми. Рад вас видеть.`,
  );
  const [guideMode, setGuideMode] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [inviteVisible, setInviteVisible] = useState(false);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [sealClicks, setSealClicks] = useState(0);
  const secretKeys = useRef("");
  const travelTimers = useRef<number[]>([]);
  const hasLeftHero = useRef(false);

  const clearTravelTimers = () => {
    travelTimers.current.forEach((timer) => window.clearTimeout(timer));
    travelTimers.current = [];
  };

  useEffect(() => {
    const helloTimer = window.setTimeout(
      () => setMessage("Хотите, я проведу вас по сайту?"),
      2600,
    );
    const inviteTimer = window.setTimeout(() => setInviteVisible(true), 3200);

    return () => {
      window.clearTimeout(helloTimer);
      window.clearTimeout(inviteTimer);
      clearTravelTimers();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === ".") {
        window.location.assign("/atelier");
        return;
      }
      if (event.key.length === 1) {
        secretKeys.current = `${secretKeys.current}${event.key.toLowerCase()}`.slice(-5);
        if (secretKeys.current === "bloom") {
          window.location.assign("/atelier");
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > Math.min(180, window.innerHeight * 0.18)) {
        setInviteVisible(true);
      }
      if (y > window.innerHeight * 0.45) {
        hasLeftHero.current = true;
      }

      if (y < 48 && guideMode) {
        clearTravelTimers();
        hasLeftHero.current = false;
        setGuideMode(false);
        setIsWalking(false);
        setDestination(null);
        setMessage(`${getTimedGreeting()}! Я снова большой.`);
      } else if (y > window.innerHeight * 0.86 && !guideMode) {
        setGuideMode(true);
        setMessage("Я рядом. Выберите маршрут — и пойдём вместе.");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [guideMode]);

  const visibleProjects =
    activeFilter === "Все"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const goTo = (nextDestination: Destination) => {
    clearTravelTimers();
    const copy = destinationCopy[nextDestination];
    setDestination(nextDestination);
    setMessage(`Да, конечно. Идём ${copy.route}!`);
    setGuideMode(true);
    setIsWalking(true);
    setInviteVisible(true);

    const scrollTimer = window.setTimeout(() => {
      document.getElementById(nextDestination)?.scrollIntoView({ behavior: "smooth" });
    }, 950);
    const arriveTimer = window.setTimeout(() => {
      setIsWalking(false);
      setMessage(copy.arrived);
    }, 2450);
    travelTimers.current = [scrollTimer, arriveTimer];
  };

  const showWorks = () => goTo("works");

  const handleSecretSeal = () => {
    const next = sealClicks + 1;
    if (next >= 5) {
      window.location.assign("/atelier");
      return;
    }
    setSealClicks(next);
  };

  return (
    <main className="site-shell">
      <div className="paper-grain" aria-hidden="true" />
      <div className="scribble-layer" aria-hidden="true">
        {scribbles.map((line) => <span className={`scribble ${line}`} key={line} />)}
      </div>

      <aside
        className={`romi-guide ${guideMode ? "romi-guide--small" : ""} ${isWalking ? "romi-guide--walking" : ""}`}
        aria-live="polite"
      >
        <div className="romi-guide__bubble" role="status">{message}</div>
        <div className="romi-guide__character">
          <Image
            className="romi-guide__pose romi-guide__pose--idle"
            src="/daisy-3d-idle-base.png"
            width={520}
            height={520}
            priority
            alt="Объёмная ромашка Роми машет рукой"
          />
          <Image
            className="romi-guide__arm"
            src="/daisy-3d-wave-arm.png"
            width={520}
            height={520}
            priority
            alt=""
            aria-hidden="true"
          />
          <Image
            className="romi-guide__pose romi-guide__pose--run"
            src="/daisy-3d.png"
            width={520}
            height={520}
            priority
            alt="Объёмная ромашка Роми идёт вместе с посетителем"
          />
        </div>
        {guideMode && destination && (
          <span className="romi-guide__destination">→ {destinationCopy[destination].route}</span>
        )}
      </aside>

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="На главную">
          ТВОЁ ИМЯ<span>®</span>
        </a>
        <nav className="topnav" aria-label="Основная навигация">
          <a href="#works">Работы</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a className="availability" href="#contact">
          <span /> открыт·а к проектам
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <p className="eyebrow">ВИЗУАЛЬНЫЙ ДИЗАЙН · 2026</p>
          <h1>
            ДИЗАЙН
            <span>С ХАРАКТЕРОМ</span>
          </h1>
          <p className="hero__lead">
            Создаю айдентику, digital-продукты и визуальные системы,
            в которых идея чувствуется с первого взгляда.
          </p>
          <div className="hero__actions">
            <button type="button" onClick={showWorks}>Смотреть работы ↘</button>
            <span>Москва · работаю по всему миру</span>
          </div>
        </div>

        <div className="character-stage">
          <div className="character-stage__label" aria-hidden="true">
            <span>РОМИ · ЦИФРОВОЙ ПОМОЩНИК</span>
            <span><i /> НА СВЯЗИ</span>
          </div>
          <div className="character-stage__halo" aria-hidden="true" />
          <div className={`route-invite ${inviteVisible ? "route-invite--visible" : ""}`}>
            <div>
              <span>РОМИ СПРАШИВАЕТ</span>
              <strong>Куда отправимся?</strong>
            </div>
            <div aria-label="Выбрать маршрут">
              <button type="button" onClick={() => goTo("works")}>К работам</button>
              <button type="button" onClick={() => goTo("about")}>Обо мне</button>
              <button type="button" onClick={() => goTo("contact")}>К контактам</button>
            </div>
          </div>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <div>
            БРЕНДИНГ ✦ WEB-ДИЗАЙН ✦ АРТ-ДИРЕКШН ✦ УПАКОВКА ✦ БРЕНДИНГ ✦
            WEB-ДИЗАЙН ✦ АРТ-ДИРЕКШН ✦ УПАКОВКА ✦
          </div>
        </div>
      </section>

      <section className="works section-frame" id="works">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ИЗБРАННОЕ / 01—04</p>
            <h2>РАБОТЫ</h2>
          </div>
          <p className="section-intro">
            Проекты, в которых стратегия встречается с характером,
            а идея становится системой.
          </p>
        </div>

        <div className="filters" aria-label="Фильтр проектов">
          {filters.map((filter) => (
            <button
              className={filter === activeFilter ? "active" : ""}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className={`project-art project-art--${project.art}`}>
                <span className="project-art__number">{project.number}</span>
                <span className="project-art__title">{project.title}</span>
                <span className="project-art__stamp">NEW WORK ↗</span>
                <span className="shape shape--a" />
                <span className="shape shape--b" />
                <span className="shape shape--c" />
              </div>
              <div className="project-meta">
                <h3>{project.title}</h3>
                <p>{project.note}</p>
                <div>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                  <button type="button" aria-label={`Открыть проект ${project.title}`}>↗</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__marquee" aria-hidden="true">
          <span>ЛЮБОПЫТСТВО · СИСТЕМА · ИГРА · ЛЮБОПЫТСТВО · СИСТЕМА · ИГРА ·</span>
        </div>
        <div className="about__content section-frame">
          <p className="eyebrow">ОБО МНЕ / 05</p>
          <div className="about__grid">
            <h2>ДЕЛАЮ СМЕЛО,<span>ДУМАЮ ТОЧНО.</span></h2>
            <div className="about__story">
              <p className="lead">
                Я визуальный дизайнер, который превращает сложные идеи в ясные,
                живые и запоминающиеся системы.
              </p>
              <p>
                Люблю выразительную типографику, детали с характером и проекты,
                где можно соединить исследование, стратегию и немного игры.
              </p>
              <a href="#contact">Давайте познакомимся ↗</a>
            </div>
          </div>

          <div className="capabilities" aria-label="Направления работы">
            <article><span>01</span><h3>Айдентика</h3><p>Стратегия, знак, типографика, бренд-система, гайдлайн.</p></article>
            <article><span>02</span><h3>Digital</h3><p>Сайты, лендинги, интерфейсы и дизайн-системы.</p></article>
            <article><span>03</span><h3>Арт-дирекшн</h3><p>Концепция, визуальный язык, съёмки и запуск кампании.</p></article>
          </div>
        </div>
      </section>

      <section className="contact section-frame" id="contact">
        <p className="eyebrow">ЕСТЬ ИДЕЯ? / 06</p>
        <div className="contact__title">
          <h2>ДАВАЙТЕ РАСТИТЬ ЕЁ ВМЕСТЕ.</h2>
          <span className="contact__flower" aria-hidden="true">✿</span>
        </div>
        <div className="contact__links">
          <a href="mailto:hello@yourname.design">
            <span>Написать на почту</span><strong>hello@yourname.design</strong><i>↗</i>
          </a>
          <a href="#top">
            <span>Следить за работами</span><strong>Behance / Telegram</strong><i>↗</i>
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 · ТВОЁ ИМЯ</span>
        <span>Сделано с идеями и заботой</span>
        <button
          className={`secret-seal ${sealClicks >= 3 ? "secret-seal--awake" : ""}`}
          type="button"
          aria-label="Декоративная цветочная печать"
          onClick={handleSecretSeal}
          title=""
        >✿</button>
      </footer>
    </main>
  );
}
