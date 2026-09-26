import Image from "next/image";

import { portfolioContent } from "./content";

const { links, processSteps, projects, services } = portfolioContent;

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
          <a className="header-cta" href="#contact">
            Обсудить проект<span aria-hidden="true">↓</span>
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
                Веб-разработка <span>и автоматизация</span>
              </h1>
              <p className="hero-lead">
                Довожу задачу до результата, который реально работает:
                показываю прогресс на каждом шаге, не пропадаю на середине
                проекта и передаю исходный код целиком. От лендинга до
                сервиса с базой данных, Telegram-ботов и AI-интеграций.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Обсудить проект<span aria-hidden="true">↓</span>
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
            <span>Прогресс видно на каждом этапе</span>
            <span>Без пропаж на середине проекта</span>
            <span>Исходный код передаю полностью</span>
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
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        Смотреть страницу <span aria-hidden="true">↗</span>
                      </a>
                    ) : project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Открыть репозиторий <span aria-hidden="true">↗</span>
                      </a>
                    ) : project.tone === "live" ? (
                      <span>Приватный проект — подробности по запросу</span>
                    ) : (
                      <span>Ссылка появится после релиза</span>
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
                href={links.github}
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
                отвечу, уточню детали и предложу следующий шаг. Выберите удобный
                мессенджер.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={links.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram<span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href={links.max}
                target="_blank"
                rel="noreferrer"
              >
                Написать в MAX<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>Андрей Балашов</strong>
            <span>Веб-разработка и автоматизация</span>
          </div>
          <nav aria-label="Дополнительная навигация">
            <a href="#top">Наверх</a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={links.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a href={links.max} target="_blank" rel="noreferrer">
              MAX
            </a>
          </nav>
          <span>© 2026 · Next.js · GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}
