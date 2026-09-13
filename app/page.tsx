const skills = [
  "Веб-разработка",
  "Frontend (React, Next.js)",
  "Backend (Node.js)",
  "Базы данных (PostgreSQL)",
  "AI-агенты и автоматизация",
  "Telegram-боты",
  "Багфиксы и доработка сайтов",
  "Лендинги и одностраничники",
];

const projects = [
  {
    title: "SPES76",
    tagline: "",
    description:
      "Цифровая платформа для рынка услуг спецтехники: каталог, заявки, личные кабинеты компаний.",
    stack: "Next.js · TypeScript · PostgreSQL",
    status: "В разработке (MVP)",
    tone: "progress" as const,
  },
  {
    title: "ЕЦУЭПО",
    tagline: "",
    description:
      "Цифровая экосистема для внутренних процессов подразделения охраны.",
    stack: "Next.js · TypeScript",
    status: "В разработке",
    tone: "progress" as const,
  },
  {
    title: "B.A.C.E.Y",
    tagline: "Boundless Autonomous Cognitive Engine, Yours",
    description:
      "Полноценный автономный AI-агент с долговременной памятью, работающий в непрерывном цикле: ведёт несколько проектов параллельно, пишет и деплоит код, настраивает инфраструктуру и CI/CD, генерирует дизайн и изображения, автоматизирует бизнес-процессы, сам находит и чинит сетевые проблемы. Telegram, голос, фото — просто интерфейсы поверх этого.",
    stack: "Node.js · Telegram Bot API · Claude API",
    status: "В работе, боевая эксплуатация",
    tone: "live" as const,
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section style={{ position: "relative", paddingTop: 64, paddingBottom: 88, overflow: "hidden" }}>
        {/* Ambient corner glows — kept far from text, heavily blurred so contrast never suffers */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -220,
            left: -200,
            width: 480,
            height: 480,
            background: "var(--violet)",
            borderRadius: "50%",
            filter: "blur(90px)",
            opacity: 0.35,
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -100,
            right: -240,
            width: 460,
            height: 460,
            background: "var(--lime)",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.4,
            zIndex: 0,
          }}
        />
        {/* Floating orbs — small interactive-feeling accents */}
        {[
          { top: "18%", left: "8%", size: 10, color: "var(--violet)", delay: "0s" },
          { top: "68%", left: "12%", size: 14, color: "var(--lime)", delay: "1.2s" },
          { top: "30%", left: "88%", size: 12, color: "var(--lime)", delay: "0.6s" },
          { top: "72%", left: "90%", size: 8, color: "var(--violet)", delay: "1.8s" },
        ].map((o, idx) => (
          <span
            key={idx}
            aria-hidden
            style={{
              position: "absolute",
              top: o.top,
              left: o.left,
              width: o.size,
              height: o.size,
              borderRadius: "50%",
              background: o.color,
              opacity: 0.7,
              animation: `floatOrb 5s ease-in-out ${o.delay} infinite`,
              zIndex: 0,
            }}
          />
        ))}

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div
            className="rise"
            style={{
              position: "relative",
              width: 300,
              height: 300,
              margin: "0 auto 32px",
              animationDelay: "0.1s",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -60,
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)",
                opacity: 0.45,
                filter: "blur(10px)",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, var(--violet), var(--lime), var(--violet))",
                animation: "spinRing 6s linear infinite",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "7px solid var(--paper)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/andrey-portfolio/avatar.jpg"
                alt="Андрей Балашов"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  transform: "scale(1.8)",
                  display: "block",
                  filter: "contrast(1.18) saturate(1.1) brightness(1.03)",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 6,
                right: 6,
                background: "var(--ink)",
                color: "var(--lime)",
                fontSize: 12,
                padding: "7px 14px",
                borderRadius: 999,
                border: "3px solid var(--paper)",
                whiteSpace: "nowrap",
              }}
            >
              agent.status = online
            </div>
          </div>

          <p
            className="rise"
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 22,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              border: "1px solid var(--ink)",
              borderRadius: 999,
              animationDelay: "0.15s",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--lime)",
                animation: "pulseDot 2s infinite",
              }}
            />
            status: доступен для заказов
          </p>
          <h1
            className="rise"
            style={{
              fontFamily: "var(--serif)",
              fontOpticalSizing: "auto",
              fontWeight: 600,
              fontSize: "clamp(48px, 8vw, 92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              animationDelay: "0.2s",
            }}
          >
            Андрей Балашов
          </h1>
          <p
            className="rise"
            style={{
              marginTop: 14,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.6,
              animationDelay: "0.25s",
            }}
          >
            &lt;/&gt; web-разработка + AI-автоматизация
          </p>
          <p
            className="rise"
            style={{
              marginTop: 22,
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              animationDelay: "0.3s",
            }}
          >
            Начинающий веб-разработчик и AI-инженер. Учусь через практику —
            веду несколько реальных проектов, часть из них ещё в разработке.
            Делаю сайты, лендинги, Telegram-боты и AI-агентов.
          </p>
          <div
            className="rise"
            style={{
              marginTop: 34,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              animationDelay: "0.35s",
            }}
          >
            <a
              href="#contact"
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Обсудить проект →
            </a>
            <a
              href="#work"
              style={{
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 14,
                border: "1px solid var(--ink)",
                textDecoration: "none",
              }}
            >
              Смотреть работы
            </a>
          </div>
        </div>

        <div className="container" style={{ marginTop: 56, position: "relative", zIndex: 1 }}>
          <div
            className="rise"
            style={{
              maxWidth: 420,
              margin: "0 auto",
              textAlign: "left",
              animationDelay: "0.4s",
              background: "var(--ink)",
              color: "#9cff6b",
              borderRadius: 10,
              padding: "16px 18px",
              fontSize: 13,
              lineHeight: 1.7,
              boxShadow: "8px 8px 0 var(--violet)",
            }}
          >
            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
            </div>
            <span style={{ opacity: 0.6 }}>$</span> whoami
            <br />
            андрей_балашов · web_dev + ai_automation
            <br />
            <span style={{ opacity: 0.6 }}>$</span> npm run life --practice
            <span style={{ animation: "blink 1s step-end infinite" }}>▌</span>
          </div>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section style={{ padding: "36px 0 64px", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.6, marginBottom: 18 }}>
            // Стек и навыки
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {skills.map((s, i) => (
              <span
                key={s}
                className="rise"
                style={{
                  fontSize: 13,
                  padding: "9px 16px",
                  borderRadius: 8,
                  border: "1px solid var(--ink)",
                  background: i % 3 === 0 ? "var(--lime)" : "transparent",
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="work" style={{ padding: "20px 0 80px" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 600,
              marginBottom: 36,
              letterSpacing: "-0.01em",
            }}
          >
            Проекты
          </h2>
          <div style={{ display: "grid", gap: 18 }}>
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="rise"
                style={{
                  background: "var(--paper-2)",
                  borderRadius: 16,
                  padding: "28px 30px",
                  borderLeft: `5px solid ${p.tone === "live" ? "var(--violet)" : "var(--ink)"}`,
                  animationDelay: `${i * 0.1}s`,
                  transition: "transform 0.25s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, fontWeight: 600 }}>{p.title}</h3>
                    {p.tagline && (
                      <p
                        style={{
                          fontSize: 11,
                          fontStyle: "italic",
                          opacity: 0.55,
                          letterSpacing: "0.02em",
                          marginTop: 2,
                        }}
                      >
                        {p.tagline}
                      </p>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "5px 12px",
                      borderRadius: 999,
                      background: p.tone === "live" ? "var(--violet)" : "transparent",
                      color: p.tone === "live" ? "#fff" : "var(--ink)",
                      border: p.tone === "live" ? "none" : "1px solid var(--ink)",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.6, opacity: 0.85, maxWidth: 640 }}>
                  {p.description}
                </p>
                <p style={{ marginTop: 14, fontSize: 12, opacity: 0.55, letterSpacing: "0.03em" }}>{p.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section
        id="contact"
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "72px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -100,
            left: -80,
            width: 320,
            height: 320,
            background: "var(--violet)",
            opacity: 0.5,
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(30px, 6vw, 52px)",
              fontWeight: 600,
              marginBottom: 18,
              letterSpacing: "-0.01em",
            }}
          >
            Есть задача? Напишем.
          </h2>
          <p style={{ opacity: 0.7, marginBottom: 30, fontSize: 15 }}>
            Самозанятый, работаю официально. Небольшие и средние задачи по сайтам и автоматизации.
          </p>
          <a
            href="https://t.me/AVBallashov"
            style={{
              display: "inline-block",
              background: "var(--lime)",
              color: "var(--ink)",
              padding: "16px 34px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
