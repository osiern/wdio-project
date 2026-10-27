# WebdriverIO Smoke & UI Tests

Проект автоматизированного UI-тестирования на базе **WebdriverIO**.
Содержит тестовые сценарии для проверки навигации и элементов интерфейса сайта документации WebdriverIO.

---

## Описание

Тесты предназначены для практики:

- навигации по страницам;
- работы с CSS-селекторами;
- проверки URL, title и текста страницы;
- взаимодействия с элементами интерфейса;
- использования асинхронного JavaScript и проверок WebdriverIO.

Проект можно использовать как основу для изучения UI-автоматизации на WDIO.

---

## Технологический стек

- JavaScript
- Node.js и npm
- WebdriverIO (WDIO testrunner)

Наличие и настройки дополнительных репортёров и пакетов определяются файлами `package.json` и `wdio.conf.js`.

---

## Требования

Необходимо установить Node.js и npm. Поддерживаемые версии зависят от версии WebdriverIO в `package.json`.

Проверка версий:

```bash
node -v
npm -v
```

---

## Установка зависимостей

В корне проекта выполните:

```bash
npm install
```

---

## Запуск тестов

### Запуск всех тестов

```bash
npx wdio run wdio.conf.js
```

Команда запускает тесты, выбранные настройками `wdio.conf.js`.

Если в `package.json` определён скрипт `test` для запуска WDIO, можно использовать:

```bash
npm test
```

### Запуск отдельного файла

Например, для `test-3.js`:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/test-3.js
```

Аналогично для других файлов:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/test-1.js
npx wdio run wdio.conf.js --spec ./test/specs/test-2.js
npx wdio run wdio.conf.js --spec ./test/specs/test-4.js
```

Если скрипт `test` в `package.json` запускает WDIO и передаёт ему аргументы, можно использовать:

```bash
npm test -- --spec ./test/specs/test-3.js
```

---

## Пример smoke-теста

```javascript
describe('WebdriverIO docs smoke', () => {
  it('Открыть главную страницу', async () => {
    await browser.url('https://webdriver.io/');
    await expect(browser).toHaveUrl('https://webdriver.io/');
    await expect(browser).toHaveTitle(expect.stringContaining('WebdriverIO'));
  });
});
```

Это иллюстративный пример, а не подтверждённое содержимое файлов проекта.

---

## Структура проекта

```text
.
├── test/
│   ├── pageobjects/
│   │   ├── login.page.js
│   │   ├── page.js
│   │   └── secure.page.js
│   └── specs/
│       ├── test-1.js
│       ├── test-2.js
│       ├── test-3.js
│       ├── test-4.js
│       └── test.e2e.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── wdio.conf.js
```

Структура приведена по ранее показанному проекту; служебные файлы и изображения могут присутствовать дополнительно.

---

## Отчёты

Типы отчётов и пути их сохранения зависят от настройки `reporters` в `wdio.conf.js`.

Если подключён Allure Reporter, результаты сохраняются в `allure-results`, а Allure CLI доступен, отчёт можно сформировать командами:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## CI / GitHub Actions

Тесты можно запускать в CI, например через GitHub Actions. Наличие настроенного workflow в текущем проекте не подтверждено.

---

## Назначение проекта

Данный репозиторий демонстрирует базовые навыки UI-автоматизации на WebdriverIO и может использоваться как стартовый шаблон для собственных проектов.
