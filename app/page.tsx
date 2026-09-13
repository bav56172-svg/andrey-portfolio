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
    stack: "Next.js, TypeScript, PostgreSQL",
    status: "В разработке (MVP)",
  },
  {
    title: "ЕЦУЭПО",
    description:
      "Цифровая экосистема для внутренних процессов подразделения охраны.",
    stack: "Next.js, TypeScript",
    status: "В разработке",
  },
  {
    title: "Bacey",
    description:
      "Персональный AI-агент: Telegram-бот с долгосрочной памятью, распознаванием голоса и фото, интеграцией с почтой и календарём.",
    stack: "Node.js, Telegram Bot API, Claude API",
    status: "В работе, боевая эксплуатация",
  },
];

export default function Home() {
  return (
    <main>
      <section style={{ padding: "80px 0 60px", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12 }}>
            Андрей Балашов
          </h1>
          <p style={{ fontSize: 20, opacity: 0.85, marginBottom: 24 }}>
            Веб-разработка и AI-автоматизация
          </p>
          <p style={{ maxWidth: 560, margin: "0 auto", opacity: 0.75 }}>
            Начинающий веб-разработчик и AI-инженер. Учусь через практику —
            веду несколько реальных проектов, часть из них ещё в разработке.
            Делаю сайты, лендинги, Telegram-боты и AI-агентов.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: 24, marginBottom: 20 }}>Навыки</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  background: "#151d2e",
                  border: "1px solid #263149",
                  borderRadius: 20,
                  padding: "8px 16px",
                  fontSize: 14,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: 24, marginBottom: 20 }}>Проекты</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#111827",
                  border: "1px solid #263149",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <h3 style={{ fontSize: 18 }}>{p.title}</h3>
                  <span style={{ fontSize: 12, opacity: 0.6 }}>
                    {p.status}
                  </span>
                </div>
                <p style={{ opacity: 0.75, margin: "8px 0" }}>
                  {p.description}
                </p>
                <p style={{ fontSize: 13, opacity: 0.5 }}>{p.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Связаться</h2>
          <p style={{ opacity: 0.75, marginBottom: 20 }}>
            Самозанятый, работаю официально. Открыт к небольшим и средним
            задачам по сайтам и автоматизации.
          </p>
          <a
            href="https://t.me/AVBallashov"
            style={{
              display: "inline-block",
              background: "#2aabee",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 24,
              fontWeight: 600,
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
