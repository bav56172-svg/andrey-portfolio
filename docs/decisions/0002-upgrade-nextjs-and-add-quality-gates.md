# ADR-0002: обновить Next.js и добавить quality gates

## Статус

Accepted

## Дата

2026-09-15

## Контекст

Baseline использует Next.js 14.2.35 и React 18.3.1. Текущий `npm audit` сообщает high и critical уязвимости, а предлагаемое исправление требует перехода на новую major-версию. В проекте нет отдельного lint script или PR workflow, поэтому ошибки могут попадать в `master` до production-сборки.

## Решение

Перейти на Next.js 16.3.5, React/React DOM 19.3.0 и совместимые типы. Сохранить TypeScript 5.x. Добавить ESLint flat config с Core Web Vitals и TypeScript rules, команды `lint`, `typecheck`, `check`, а также GitHub Actions workflow на pull request и `master`.

Использовать Node.js 20.9+ как минимальную версию. В deploy workflow заменить `npm install` на воспроизводимый `npm ci`.

## Альтернативы

### Остаться на Next.js 14

Отклонено: известные уязвимости остаются, а линия устарела.

### Обновить только до Next.js 15

Не выбрано: 15.x находится в maintenance-линии, а небольшой статический проект позволяет проверить миграцию на active-линии с ограниченным риском.

### Не добавлять lint в CI

Отклонено: начиная с Next.js 16, `next build` не запускает lint автоматически.

## Последствия

- Минимальный Node.js повышается до 20.9.
- React 19 и новые типы могут выявить ошибки, которые раньше не блокировали сборку.
- PR получают воспроизводимый quality gate.
- Все изменения должны пройти локальный `npm run check` и GitHub workflow.
