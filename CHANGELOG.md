# Журнал изменений

Формат следует Keep a Changelog. До первого релиза Portfolio v2 изменения ведутся в секции `Unreleased` и дополнительно связываются с Engineering Pack.

## [Unreleased]

### Added

- `PORTFOLIO-EP-001`: baseline-инвентаризация проекта.
- Утверждённый PDT Portfolio v2 с позиционированием, информационной архитектурой и текстами экранов.
- Реестр Engineering Pack и правила прослеживаемой разработки.
- ADR-0001 о коммерческом позиционировании и одностраничной структуре.
- README с запуском, проверками и навигацией по документации.
- `PORTFOLIO-EP-002`: ESLint, TypeScript и production build как единая quality gate.
- GitHub Actions checks для pull request и `master`.
- Дизайн-система Portfolio v2 с accessibility и responsive-правилами.
- `PORTFOLIO-EP-003`: новый Hero с коммерческим позиционированием, навигацией, CTA и блоком услуг.
- Skip-link, видимые keyboard focus-состояния и reduced-motion режим.
- `PORTFOLIO-EP-004`: проектные карточки со структурой задачи, решения, вклада, стека и статуса.
- Проверенная публичная ссылка на репозиторий `spec76-core`.

### Changed

- Next.js обновлён с 14.2.35 до 16.3.5, React — с 18.3.1 до 19.3.0.
- Deploy workflow использует воспроизводимую установку `npm ci`.
- GitHub workflows используют Node 24-compatible `checkout` и `setup-node` actions.
- Metadata больше не представляет автора как начинающего разработчика.
- Название ЕЦЭУПО приведено к каноническому написанию.

### Known issues

- GitHub Pages настроен на legacy-источник `gh-pages`, но workflow для `master` также успешно выполняет Pages deployment; два пути нужно свести к одному источнику истины.
