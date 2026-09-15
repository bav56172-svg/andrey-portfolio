import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Сайты и лендинги",
    description:
      "Адаптивные страницы с ясной структурой, быстрой загрузкой и подготовкой к публикации.",
  },
  {
    number: "02",
    title: "Веб-приложения",
    description:
      "Интерфейсы, личные кабинеты, каталоги и внутренние сервисы с базой данных.",
  },
  {
    number: "03",
    title: "AI и автоматизация",
    description:
      "Telegram-боты, AI-агенты, интеграции и автоматизация повторяющихся процессов.",
  },
  {
    number: "04",
    title: "Доработка проектов",
    description:
      "Исправление ошибок, новые функции и улучшение интерфейса существующего сайта.",
  },
];

const projects = [
  {
    title: "B.A.C.E.Y",
    description:
      "Автономный AI-агент с долговременной памятью для параллельной работы над проектами, кодом, инфраструктурой и бизнес-процессами.",
    stack: "Node.js · Telegram Bot API · Claude API",
    status: "В работе · боевая эксплуатация",
    tone: "live",
  },
  {
    title: "SPES76",
    description:
      "Цифровая платформа для рынка услуг спецтехники: каталог, заявки и личные кабинеты компаний.",
    stack: "Next.js · TypeScript · PostgreSQL",
    status: "MVP в разработке",
    tone: "progress",
  },
  {
    title: "ЕЦУЭПО",
    description:
      "Цифровая экосистема для внутренних процессов подразделения охраны.",
    stack: "Next.js · TypeScript",
    status: "В разработке",
    tone: "progress",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="wordmark"
            href="#top"
            aria-label="Андрей Балашов — наверх"
          >
            AB<span className="wordmark-dot">.</span>
          </a>
          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#work">Проекты</a>
            <a href="#contact">Контакт</a>
          </nav>
          <a
            className="header-cta"
            href="https://t.me/AVBallashov"
            target="_blank"
            rel="noreferrer"
          >
            Обсудить проект<span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow-violet" aria-hidden="true" />
          <div className="hero-glow hero-glow-lime" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Андрей Балашов · доступен для проектов
              </p>
              <h1 id="hero-title">
                Веб-разработка <span>и AI-автоматизация</span>
              </h1>
              <p className="hero-lead">
                Создаю современные сайты, веб-приложения и автоматизацию для
                бизнеса — от лендинга и доработки существующего проекта до
                сервисов с базой данных, Telegram-ботов и AI-интеграций.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://t.me/AVBallashov"
                  target="_blank"
                  rel="noreferrer"
                >
                  Обсудить проект<span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href="#work">
                  Посмотреть работы<span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="stack-line" aria-label="Основной стек">
                Next.js <span>·</span> React <span>·</span> TypeScript{" "}
                <span>·</span> Node.js <span>·</span> PostgreSQL <span>·</span>{" "}
                Supabase <span>·</span> AI
              </p>
            </div>

            <div className="hero-visual" aria-label="Портрет Андрея Балашова">
              <div className="portrait-orbit" aria-hidden="true">
                <span>BUILD</span>
                <span>SHIP</span>
                <span>IMPROVE</span>
              </div>
              <div className="portrait-frame">
                <Image
                  src="/andrey-portfolio/avatar.jpg"
                  alt="Андрей Балашов"
                  fill
                  priority
                  sizes="(max-width: 760px) 280px, 380px"
                  className="portrait-image"
                />
              </div>
              <div className="terminal-card" aria-hidden="true">
                <div className="terminal-topline">
                  <span />
                  <span />
                  <span />
                </div>
                <p>
                  <b>$</b> whoami
                </p>
                <p className="terminal-output">developer + ai engineer</p>
                <p>
                  <b>$</b> status <span className="terminal-cursor">▋</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container hero-proof" aria-label="Рабочие принципы">
            <span>Продуктовая структура</span>
            <span>Проверяемые итерации</span>
            <span>Код и документация</span>
          </div>
        </section>

        <section
          className="section services"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">01 / Услуги</p>
              <h2 id="services-title">Чем могу помочь</h2>
              <p>
                От понятной посадочной страницы до внутреннего сервиса и
                AI-интеграции.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number" aria-hidden="true">
                    {service.number}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section work-preview"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="container">
            <div className="section-heading section-heading-light">
              <p className="section-kicker">02 / Избранные проекты</p>
              <h2 id="work-title">Проекты и решения</h2>
              <p>
                Реальные продукты на разных стадиях — с честным статусом и
                используемым стеком.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-meta">
                    <span>0{index + 1}</span>
                    <span
                      className={`project-status project-status-${project.tone}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                </article>
              ))}
            </div>
            <p className="work-note">
              Расширенные кейсы с задачей, ролью и результатом — следующий
              Engineering Pack.
            </p>
          </div>
        </section>

        <section
          className="contact-strip"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <div>
              <p className="section-kicker">Есть задача?</p>
              <h2 id="contact-title">Давайте обсудим.</h2>
            </div>
            <a
              className="button button-primary"
              href="https://t.me/AVBallashov"
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram<span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Андрей Балашов</span>
          <span>Next.js · TypeScript · GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}
