# Engineering Packs

Portfolio v2 реализуется небольшими проверяемыми пакетами.

| ID                                      | Название                                                    | Статус    |
| --------------------------------------- | ----------------------------------------------------------- | --------- |
| [PORTFOLIO-EP-001](PORTFOLIO-EP-001.md) | Позиционирование, информационная архитектура и документация | Merged    |
| [PORTFOLIO-EP-002](PORTFOLIO-EP-002.md) | Фундамент: зависимости, quality gates и дизайн-система      | Merged    |
| [PORTFOLIO-EP-003](PORTFOLIO-EP-003.md) | Hero, навигация и услуги                                    | Merged    |
| [PORTFOLIO-EP-004](PORTFOLIO-EP-004.md) | Проекты как доказательные кейсы                             | Merged    |
| [PORTFOLIO-EP-005](PORTFOLIO-EP-005.md) | Процесс, об исполнителе, контакт и footer                   | Merged    |
| [PORTFOLIO-EP-006](PORTFOLIO-EP-006.md) | Адаптивность, accessibility, performance и release          | Released  |
| [PORTFOLIO-EP-007](PORTFOLIO-EP-007.md) | Архитектура и автоматическая проверка контента               | Released   |
| [PORTFOLIO-EP-008](PORTFOLIO-EP-008.md) | Telegram и MAX как резервные каналы связи                    | Review      |

## Жизненный цикл пакета

1. Зафиксировать scope и критерии приёмки.
2. Создать ветку `portfolio/PORTFOLIO-EP-NNN-*` от актуального `master`.
3. Внести только изменения текущего пакета.
4. Выполнить заявленные проверки и записать результат.
5. Сделать осмысленный commit и push.
6. Создать PR, проверить CI и review.
7. Слить без переписывания истории, проверить production и обновить журнал.

Пакет нельзя помечать `Done`, пока фактический результат не подтверждён.
