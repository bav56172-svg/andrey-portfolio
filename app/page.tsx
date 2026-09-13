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
    description:
      "Цифровая платформа для рынка услуг спецтехники: каталог, заявки, личные кабинеты компаний.",
    stack: "Next.js · TypeScript · PostgreSQL",
    status: "В разработке (MVP)",
    tone: "progress" as const,
  },
  {
    title: "ЕЦУЭПО",
    description:
      "Цифровая экосистема для внутренних процессов подразделения охраны.",
    stack: "Next.js · TypeScript",
    status: "В разработке",
    tone: "progress" as const,
  },
  {
    title: "Bacey",
    description:
      "Персональный AI-агент: Telegram-бот с долгосрочной памятью, распознаванием голоса и фото, интеграцией с почтой и календарём.",
    stack: "Node.js · Telegram Bot API · Claude API",
    status: "В работе, боевая эксплуатация",
    tone: "live" as const,
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section style={{ position: "relative", paddingTop: 72, paddingBottom: 88, overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            right: -160,
            width: 520,
            height: 520,
            background: "var(--violet)",
            borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%",
            filter: "blur(2px)",
            opacity: 0.9,
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 60,
            right: -40,
            width: 140,
            height: 140,
            background: "var(--lime)",
            borderRadius: "30%",
            transform: "rotate(18deg)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p
            className="rise"
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 22,
              display: "inline-block",
              padding: "6px 14px",
              border: "1px solid var(--ink)",
              borderRadius: 999,
            }}
          >
            Доступен для новых заказов
          </p>
          <h1
            className="rise"
            style={{
              fontFamily: "var(--serif)",
              fontOpticalSizing: "auto",
              fontWeight: 600,
              fontSize: "clamp(48px, 9vw, 104px)",
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              maxWidth: 780,
              animationDelay: "0.05s",
            }}
          >
            Андрей
            <br />
            Балашов
          </h1>
          <p
            className="rise"
            style={{
              marginTop: 26,
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 560,
              animationDelay: "0.15s",
            }}
          >
            Начинающий веб-разработчик и AI-инженер. Учусь через практику —
            веду несколько реальных проектов, часть из них ещё в разработке.
            Делаю сайты, лендинги, Telegram-боты и AI-агентов.
          </p>
          <div
            className="rise"
            style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap", animationDelay: "0.25s" }}
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
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, fontWeight: 600 }}>{p.title}</h3>
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
