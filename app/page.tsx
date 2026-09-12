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
    </main>
  );
}
