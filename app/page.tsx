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
    category: "AI-агент и автоматизация",
    task: "Собрать в одном рабочем контуре задачи, контекст и выполнение действий по нескольким проектам.",
    solution:
      "Автономный AI-агент с долговременной памятью. Telegram, голос и изображения используются как интерфейсы взаимодействия.",
    contribution:
      "Архитектура рабочего цикла, интеграции, инфраструктура и последовательное развитие через проверяемые изменения.",
    stack: "Node.js · Telegram Bot API · Claude API",
    status: "Рабочий проект",
    tone: "live",
    repository: null,
  },
  {
    title: "SPES76",
    category: "B2B-веб-платформа",
    task: "Связать заказчиков и исполнителей на рынке услуг спецтехники в едином цифровом процессе.",
    solution:
      "Каталог техники, заявки и предложения, кабинеты компаний и рабочие пространства проектов с задачами и документами.",
    contribution:
      "Продуктовая структура, интерфейсы основных ролей и технический фундамент платформы.",
    stack: "Next.js · TypeScript · Supabase · Stripe",
    status: "MVP в разработке",
    tone: "progress",
    repository: "https://github.com/bav56172-svg/spec76-core",
  },
  {
    title: "ЕЦЭУПО",
    category: "Корпоративная платформа",
    task: "Создать единый цифровой контур для внутренних процессов подразделения охраны.",
    solution:
      "Долгосрочная экосистема с поэтапной архитектурой, управлением данными и контролируемыми инженерными решениями.",
    contribution:
      "Архитектура платформы, декомпозиция на инженерные пакеты и разработка прикладных модулей.",
    stack: "Веб-платформа · Backend · PostgreSQL",
    status: "В разработке",
    tone: "progress",
    repository: null,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Задача",
    description:
      "Уточняем цель, пользователей, ограничения и критерии готовности.",
  },
  {
    number: "02",
    title: "Решение",
    description:
      "Фиксирую структуру, технический подход, этапы и ожидаемый результат.",
  },
  {
    number: "03",
    title: "Разработка",
    description:
      "Показываю прогресс небольшими проверяемыми итерациями.",
  },
  {
    number: "04",
    title: "Запуск",
    description:
      "Проверяю сборку, адаптивность и публикацию, передаю результат и документацию.",
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
            <a href="#process">Процесс</a>
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
                    <span className="project-index">0{index + 1}</span>
                    <span
                      className={`project-status project-status-${project.tone}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="project-intro">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-stack">{project.stack}</p>
                  </div>
                  <dl className="project-details">
                    <div>
                      <dt>Задача</dt>
                      <dd>{project.task}</dd>
                    </div>
                    <div>
                      <dt>Решение</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>Вклад</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                  </dl>
                  <div className="project-footer">
                    {project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Открыть репозиторий <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span>Подробности — при обсуждении проекта</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">
              Публичные ссылки добавляются только там, где материалы не
              раскрывают закрытые данные проекта.
            </p>
          </div>
        </section>

        <section
          className="section process"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">03 / Процесс</p>
              <h2 id="process-title">Как строится работа</h2>
              <p>
                Понятный маршрут от первой формулировки задачи до проверенной
                публикации.
              </p>
            </div>
            <ol className="process-grid">
              {processSteps.map((step) => (
                <li className="process-step" key={step.number}>
                  <span className="process-number" aria-hidden="true">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section about"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div>
              <p className="section-kicker">04 / Об исполнителе</p>
              <h2 id="about-title">Инженерный подход</h2>
            </div>
            <div className="about-copy">
              <p>
                Соединяю продуктовую структуру, интерфейс и разработку. Фиксирую
                решения, веду изменения небольшими пакетами и проверяю результат
                после каждого этапа — от исходного кода до опубликованной версии.
              </p>
              <a
                href="https://github.com/bav56172-svg"
                target="_blank"
                rel="noreferrer"
              >
                Профиль на GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="contact-strip"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <div>
              <p className="section-kicker">05 / Контакт</p>
              <h2 id="contact-title">Есть задача? Давайте обсудим.</h2>
              <p className="contact-copy">
                Коротко опишите проект, текущую ситуацию и желаемый результат. Я
                отвечу, уточню детали и предложу следующий шаг.
              </p>
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
          <div>
            <strong>Андрей Балашов</strong>
            <span>Веб-разработка и AI-автоматизация</span>
          </div>
          <nav aria-label="Дополнительная навигация">
            <a href="#top">Наверх</a>
            <a
              href="https://github.com/bav56172-svg"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://t.me/AVBallashov"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </nav>
          <span>© 2026 · Next.js · GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}
