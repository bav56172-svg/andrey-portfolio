# PORTFOLIO-EP-002: фундамент и quality gates

## Статус

In review

## Цель

Устранить известный dependency risk, добавить обязательные проверки для PR и зафиксировать дизайн-систему до изменения экранов.

## В scope

- миграция Next.js 14 / React 18 на поддерживаемые версии;
- отдельные lint, typecheck и build-команды;
- GitHub Actions quality gate для pull request;
- воспроизводимая установка через `npm ci` в deploy workflow;
- дизайн-система Portfolio v2;
- ADR миграции.

## Критерии приёмки

- [x] `npm audit` сообщает 0 известных уязвимостей.
- [x] `npm run lint` проходит.
- [x] `npm run typecheck` проходит.
- [x] `npm run build` проходит и создаёт статический export.
- [x] PR quality workflow создан.
- [x] Дизайн-система согласована с PDT и текущей стилистикой.
- [ ] Ветка отправлена, PR создан, GitHub checks завершены.

## План отката

Обычный revert merge-коммита EP-002. Исторический lockfile и workflow остаются доступными в Git.
