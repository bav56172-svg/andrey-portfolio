# PORTFOLIO-EP-008: резервные каналы связи

## Статус

Released via PR #10

## Цель

Дать посетителю выбор между Telegram и MAX в основном контактном сценарии, не убирая существующий канал и не ухудшая мобильную доступность.

## В scope

- подтверждённая пользователем ссылка MAX `https://web.max.ru/6581570`;
- отдельная CTA «Написать в MAX» в секции «Контакт»;
- ссылка MAX в footer;
- хранение MAX URL в едином источнике контента;
- HTTPS-валидация MAX URL и контрактный тест;
- desktop и mobile-проверка двух контактных CTA.

## Вне scope

- замена Telegram или изменение CTA в header и Hero;
- создание MAX-бота, канала или формы обратной связи;
- сбор аналитики переходов;
- изменение остальных секций Portfolio v2.

## Критерии приёмки

- [x] В секции «Контакт» доступны Telegram и MAX.
- [x] Footer содержит ссылку MAX.
- [x] MAX URL хранится в `app/portfolio-content.json` и проходит HTTPS-валидацию.
- [x] Обе CTA доступны с клавиатуры и не создают горизонтальную прокрутку на 320 px.
- [x] `npm run check` завершается успешно.
- [x] Ветка отправлена, PR #10 создан, review не выявил замечаний, GitHub quality check завершён успешно.
- [x] После merge production повторно проверен.

## TDD evidence

Тест небезопасной MAX-ссылки добавлен до production-кода. Первый запуск завершился ожидаемым провалом `Missing expected exception`; после добавления `links.max` в валидатор все шесть контрактных тестов прошли.

## Browser evidence

- Static export проверен в управляемом Chromium на viewport 1440×900 и 320×800.
- На 320 px `scrollWidth` равен ширине viewport; обе CTA имеют размер 288×50 px.
- Keyboard Tab переводит фокус с Telegram на MAX; видимое focus-состояние подтверждено.
- `href` CTA и footer точно равен `https://web.max.ru/6581570`.
- Python Playwright отсутствует в проектной среде и не добавлялся как новая зависимость; использован доступный управляемый Chromium.

## План отката

Обычный revert merge-коммита EP-008 удаляет MAX из источника данных, контактной секции и footer, возвращая прежний Telegram-only сценарий.

## Post-release evidence

- Merge commit: `ff0ee4604a18d235a2d82a7db5b0105334022e1a`.
- Post-merge Quality checks и Deploy to GitHub Pages завершены успешно.
- GitHub Pages API сообщает `build_type = workflow`, `status = built`.
- Production URL отвечает HTTP 200.
- Production HTML содержит точный MAX URL, CTA «Написать в MAX» и обновлённый контактный текст.
