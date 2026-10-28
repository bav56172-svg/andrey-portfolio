"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./vk-auth.module.css";

export default function VkAuthCallbackPage() {
  return (
    <Suspense fallback={<main className={styles.shell}>Проверяем ответ VK ID…</main>}>
      <VkAuthCallbackContent />
    </Suspense>
  );
}

function VkAuthCallbackContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");
  const ready = Boolean(searchParams.get("code") && searchParams.get("state"));

  async function copyCallback() {
    if (!ready) return;
    await navigator.clipboard.writeText(window.location.href);
    window.history.replaceState({}, "", window.location.pathname);
    setCopied(true);
  }

  return (
    <main className={styles.shell}>
      <section className={styles.card} aria-labelledby="vk-auth-title">
        <p className={styles.eyebrow}>VK ID · безопасное подключение</p>
        <h1 id="vk-auth-title">Авторизация для публикаций</h1>

        {!error && !ready && (
          <div className={styles.notice}>
            <strong>Параметры авторизации отсутствуют.</strong>
            <p>Откройте эту страницу через подготовленную ссылку входа VK ID.</p>
          </div>
        )}

        {error && (
          <div className={`${styles.notice} ${styles.error}`}>
            <strong>VK ID вернул ошибку.</strong>
            <p>{errorDescription || error}</p>
          </div>
        )}

        {ready && (
          <div className={styles.notice}>
            <strong>Разрешение получено.</strong>
            <p>
              Скопируйте адрес возврата и передайте его только локальному инструменту
              на этом компьютере. Не отправляйте адрес в чат.
            </p>
            <button type="button" onClick={copyCallback} disabled={copied}>
              {copied ? "Скопировано, параметры удалены из строки" : "Скопировать адрес возврата"}
            </button>
          </div>
        )}

        <ul className={styles.rules}>
          <li>Страница не сохраняет код и не отправляет его на сервер портфолио.</li>
          <li>Токены здесь не отображаются и не записываются.</li>
          <li>APP_ID приложения: 54862985.</li>
        </ul>
      </section>
    </main>
  );
}
