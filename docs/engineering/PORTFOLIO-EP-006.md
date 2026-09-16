# PORTFOLIO-EP-006: accessibility, performance и release

## Статус

Released via PR #6

## Цель

Завершить Portfolio v2 проверяемым release-пакетом: улучшить индексируемость и загрузку, закрыть accessibility checklist, сделать static-export проверки воспроизводимыми и подтвердить единственный путь публикации.

## В scope

- расширенные metadata, canonical, Open Graph и Twitter Card;
- статические `robots.txt`, `sitemap.xml` и SVG favicon;
- self-hosted шрифты через `next/font` без браузерных запросов к Google;
- минимальный размер 12 px для служебного текста;
- автоматическая проверка критических маркеров static export;
- актуальные GitHub Pages deployment actions;
- viewport, landscape, keyboard, reduced-motion, contrast и touch-target проверки;
- переключение GitHub Pages с legacy `gh-pages` на GitHub Actions как единственный источник публикации.

## Проверенные решения и ограничения

- Сохраняется `output: "export"` и `basePath: "/andrey-portfolio"`.
- Для metadata routes в Next.js 16.3 при static export явно задано `dynamic = "force-static"`; без него первая сборка остановилась на `/robots.txt`.
- Новые runtime-зависимости не добавляются.
- Аналитика не подключается: отдельного решения о приватности и инструменте нет.
- Open Graph изображение не добавляется без отдельного утверждённого визуального актива; текстовые preview metadata публикуются сейчас.

## Критерии приёмки

- [x] Production build создаёт `/`, `/icon.svg`, `/robots.txt` и `/sitemap.xml`.
- [x] Canonical, Open Graph и Twitter metadata присутствуют в статическом HTML.
- [x] Браузер не загружает шрифты с `fonts.googleapis.com` или `fonts.gstatic.com`.
- [x] `npm run check` включает проверку содержимого static export.
- [x] Контраст основных текстовых пар не ниже 4.5:1 (измеренный минимум 5.95:1).
- [x] Touch targets, keyboard flow, focus и reduced-motion CSS проверены; 320 px подтверждает reflow-прокси для 400% zoom на 1280 px.
- [x] Viewport 320/375/768/1024/1440 и 812×375 landscape проверены без переполнения.
- [x] `npm audit --audit-level=low` сообщает 0 уязвимостей.
- [x] Ветка отправлена, PR #6 создан, пятиосевой review и GitHub quality check завершены успешно.
- [x] После merge Pages переведён на workflow source, deploy успешен, production проверен.

## План отката

Обычный revert merge-коммита EP-006 возвращает предыдущие metadata, загрузку шрифтов и workflow actions. Настройка Pages возвращается отдельным проверяемым API-действием только при необходимости отката.

## Среда проверки

Локальный Python Playwright отсутствует и не добавлялся как новая зависимость. Эквивалентная browser-проверка выполнена через управляемый Chromium; production build и static export проверяются отдельным Node.js-скриптом без сторонних пакетов.

## Post-release evidence

- Merge commit: `64672b56e4f397be64ec92f8a26ef3a6f8a3ab65`.
- GitHub Pages API: `build_type = workflow`, `status = built`.
- Контрольный rerun deploy workflow завершён успешно с `upload-pages-artifact@v5` и `deploy-pages@v5`.
- Production URL, `robots.txt` и `sitemap.xml` отвечают HTTP 200.
- Production HTML содержит canonical, Open Graph, Twitter Card и favicon; внешние Google Fonts отсутствуют.
