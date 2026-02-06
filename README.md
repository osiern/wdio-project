# WebdriverIO Smoke & UI Tests

Проект автоматизированного UI-тестирования на базе **WebdriverIO**.  
Содержит набор smoke-тестов для проверки базовой навигации и ключевых элементов сайта документации WebdriverIO.

---

## Описание

Тесты демонстрируют:

- навигацию по страницам;
- работу с селекторами;
- проверки URL, title и текста страницы;
- взаимодействие с полями ввода и клавиатурой;
- базовые возможности WebdriverIO для UI-smoke сценариев.

Проект подходит как шаблон для старта UI-автоматизации на WDIO.

---

## Технологический стек

- JavaScript / TypeScript
- WebdriverIO (WDIO testrunner)
- Node.js
- Allure Reports
- @wdio/cli
- @wdio/local-runner

---

## Требования

Перед запуском убедитесь, что установлены:

- Node.js ≥ 18
- npm ≥ 9

Проверка версий:

```bash
node -v
npm -v
```

---

## Установка зависимостей

```bash
npm install
```

---

## Запуск тестов

```bash
npx wdio run wdio.conf.js
```

или

```bash
npm test
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

  it('Перейти в раздел API', async () => {
    await $('a[href="/docs/api"]').click();
    await expect(browser).toHaveUrl(expect.stringContaining('/docs/api'));
    await expect($('article h1')).toHaveText(expect.stringContaining('Introduction'));
  });

});
```

---

## Отчёты Allure

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## Структура проекта

```
.
├── tests/
│   └── webdriverio.smoke.js
├── wdio.conf.js
├── package.json
├── .gitignore
└── README.md
```

---

## CI / GitHub Actions

Проект может быть использован с GitHub Actions для автоматического запуска тестов при `push` и `pull_request`.

---

## Назначение проекта

Данный репозиторий демонстрирует базовые навыки UI-автоматизации на WebdriverIO и может использоваться как стартовый шаблон для собственных проектов.
