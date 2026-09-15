# Portfolio v2 — Андрей Балашов

Персональное портфолио веб-разработчика и AI-инженера. Сайт должен одновременно показывать заказчику понятный результат, а техническому читателю — инженерный подход и качество реализации.

Опубликованная версия: <https://bav56172-svg.github.io/andrey-portfolio/>

## Быстрый старт

Требуется Node.js 20.9 или новее.

```bash
npm ci
npm run dev
```

Локальная версия откроется по адресу `http://localhost:3000/andrey-portfolio`.

## Проверки

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Локальная разработка |
| `npm run build` | Production-сборка и статический экспорт в `out/` |
| `npm run lint` | Проверка ESLint и правил Core Web Vitals |
| `npm run typecheck` | Проверка TypeScript без генерации файлов |
| `npm run check` | Полная локальная quality gate |
| `npm audit` | Проверка известных уязвимостей зависимостей |

## Документация Portfolio v2

- [PDT Portfolio v2](docs/product/portfolio-v2-pdt.md)
- [Инвентаризация baseline](docs/inventory/baseline-2026-09-15.md)
- [Реестр Engineering Pack](docs/engineering/README.md)
- [PORTFOLIO-EP-001](docs/engineering/PORTFOLIO-EP-001.md)
- [Журнал решений](docs/decisions/README.md)
- [Журнал изменений](CHANGELOG.md)

## Архитектура и публикация

Проект использует Next.js App Router, React и TypeScript. `output: "export"` и `basePath: "/andrey-portfolio"` готовят статический сайт для GitHub Pages.

GitHub Pages API сообщает legacy-режим с источником `gh-pages`. Одновременно `.github/workflows/deploy.yml` успешно собирает и развёртывает `master` через Pages Actions. До изменения схемы деплоя необходимо выбрать и документировать один источник истины.

## Правила изменений

Работа ведётся малыми пакетами `PORTFOLIO-EP-NNN`. Каждый пакет получает отдельную ветку, описание объёма, критерии приёмки, проверки, осмысленные коммиты и push. По возможности пакет оформляется отдельным pull request без переписывания истории Git.
