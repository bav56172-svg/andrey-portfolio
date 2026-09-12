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
    </main>
  );
}
