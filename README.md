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

### Запуск всех тестов

```bash
npx wdio run wdio.conf.js
```

или, если настроен скрипт `test` в `package.json`:

```bash
npm test
```

### Запуск одного теста

Для запуска конкретного тестового файла используется параметр `--spec`.

Например, запуск `test-3.js`:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/test-3.js
```

### Запуск других тестов

```bash
npx wdio run wdio.conf.js --spec ./test/specs/test-1.js
```

```bash
npx wdio run wdio.conf.js --spec ./test/specs/test-2.js
```

```bash
npx wdio run wdio.conf.js --spec ./test/specs/test-4.js
```

### Запуск через npm

Если в `package.json` настроен скрипт `"test": "wdio run ./wdio.conf.js"`, можно использовать:

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

  it('Перейти в раздел API', async () => {
    await $('a[href="/docs/api"]').click();
    await expect(browser).toHaveUrl(expect.stringContaining('/docs/api'));
    await expect($('article h1')).toHaveText(expect.stringContaining('Introduction'));
  });

});
```

---

## Отчёты Allure

При настроенном Allure Reporter и установленном Allure CLI:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

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
├── header.png
├── postHeaderTitle.png
├── package-lock.json
├── package.json
├── README.md
└── wdio.conf.js
```

---

## CI / GitHub Actions

Проект может быть использован с GitHub Actions для автоматического запуска тестов при `push` и `pull_request`.

---

## Назначение проекта

Данный репозиторий демонстрирует базовые навыки UI-автоматизации на WebdriverIO и может использоваться как стартовый шаблон для собственных проектов.
