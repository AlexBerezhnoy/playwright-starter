# Додавання Audi TT у Garage

## Контракт і статус

- FACT: вимога та обсяг перевірки задані у
  `requirements/audi-tt-garage-requirement.md`.
- FACT: базові правила додавання автомобіля наведені у `specs/add-car.md`.
- FACT: локатори ще не підтверджені за поточним UI.
- ASSUMPTION: тест буде створено у вказаному вимогою файлі
  `tests/add-car.spec.ts` і запускатиметься з наявним Playwright config.

## Початковий стан

Користувач увійшов у QAuto через `Guest log in`. У Garage доступна дія
`Add car`. Гостьовий вхід є підготовкою сценарію.

## Тестові дані

- Brand: `Audi`.
- Model: `TT`.
- Mileage: `12000`.

## Сценарій

1. Відкрити форму `Add car`.
2. Обрати Brand `Audi`.
3. У залежному від Brand полі Model обрати `TT`.
4. Ввести Mileage `12000`.
5. Зберегти автомобіль.

## Єдина перевірка

Після збереження у Garage відображається запис `Audi TT`.

Не додавати перевірок URL, mileage, повідомлень, видимості інших елементів чи
інших сценаріїв: вимога задає лише появу `Audi TT`.

## Межі реалізації та виконання

- Один UI-тест у Chromium із `@playwright/test` і наявними залежностями.
- Використовувати `baseURL` із `playwright.config.ts`.
- Не використовувати API, registration, Fuel Expenses або fixed waits.
- Не змінювати config, dependencies, baseline чи product code.
- Не вигадувати CSS/XPath або expected result. Підтвердити локатори за поточним
  UI; якщо ознаки елементів не підтверджуються, записати `ASSUMPTION` і `STOP`.
- Якщо сценарій неможливо виконати або `Audi TT` не з'явиться, зафіксувати
  фактичне спостереження й blocker; не оголошувати тест успішним.

## Запуск та evidence

- Після окремого дозволу на запуск виконати лише:

  ```bash
  npx playwright test tests/add-car.spec.ts
  ```

- Зберегти команду й дослівний результат або blocker у `run-evidence.md` за
  структурою `templates/run-evidence.md`.
- Не включати credentials, cookies чи tokens у terminal output або evidence.
- У разі невдалого запуску вказати причину, якщо вона встановлена, та рішення
  `STOP`. Не вигадувати `passed`.

## Публікація

Вимога просить опублікувати результат без credentials і службових файлів.
Публікацію виконує людина: `AGENTS.md` забороняє агенту commit, push та зовнішні
write-дії. Перед публікацією потрібно перевірити склад змін і виключити
`.env`, `.playwright/`, `node_modules/`, `test-results/`, `playwright-report/`
та інші службові файли.

## Дозволи наступних кроків

Цей локальний spec очікує перевірки людиною. `APPROVE SPEC` дозволяє показати
точну команду відкриття CLI-сесії; `APPROVE CLI INSPECTION` дозволяє перевірити
поточний UI та створити названий тест. Для запуску потрібен `APPROVE RUN`.
