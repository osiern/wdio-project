# WebdriverIO Smoke & UI Tests

Учебный проект автоматизированного UI-тестирования на **JavaScript + WebdriverIO + Mocha**.

Содержит тесты для проверки навигации, элементов интерфейса и авторизации на GitHub, а также учебные тесты сайта документации WebdriverIO.

---

## Технологический стек

- JavaScript
- WebdriverIO
- Mocha
- Node.js

---

## Установка

Клонировать репозиторий:

```bash
git clone https://github.com/osiern/wdio-project.git
```

Перейти в папку проекта и установить зависимости:

```bash
cd wdio-project
npm install
```

---

## Тест-кейсы GitHub

| ID | Сценарий | Проверки |
|---|---|---|
| TC-001 | Главная страница GitHub | URL и заголовок |
| TC-002 | Форма авторизации | URL и отображение элементов |
| TC-003 | Негативная авторизация | Значения полей и сообщение об ошибке |
| TC-004 | Публичный репозиторий | URL, вкладки Code и Issues |
| TC-005 | Переход в Issues | URL и отображение контента |

Каждый тест-кейс находится в отдельном файле `github-N.js`.

---

## Организация тестов

- `describe()` — группировка действий и проверок одного сценария.
- `DATA` — объект с URL, селекторами и тестовыми значениями внутри `describe()`.
- `it()` — действия с браузером и элементами интерфейса.
- `check()` — проверки ожидаемых результатов через `expect()`.

`check()` — пользовательская функция, реализованная на основе Mocha `it()`. Действия и проверки регистрируются как отдельные тесты Mocha.

### Пример

```javascript
const { check } = require('../helpers/check');

describe('TC-001: Главная страница GitHub', () => {
    const DATA = {
        url: 'https://github.com/',
        title: 'GitHub',
    };

    it('Открыть главную страницу', async () => {
        await browser.url(DATA.url);
    });

    check('Проверить URL страницы', async () => {
        await expect(browser).toHaveUrl(DATA.url);
    });

    check('Проверить заголовок страницы', async () => {
        await expect(browser).toHaveTitle(
            expect.stringContaining(DATA.title)
        );
    });
});
```

---

## Структура проекта

```text
wdio-project/
├── test/
│   ├── helpers/
│   │   └── check.js
│   ├── pageobjects/
│   │   ├── login.page.js
│   │   ├── page.js
│   │   └── secure.page.js
│   └── specs/
│       ├── github-1.js
│       ├── github-2.js
│       ├── github-3.js
│       ├── github-4.js
│       ├── github-5.js
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

---

## Запуск тестов

**Все тесты:**

```bash
npx wdio run wdio.conf.js
```

**Отдельный тест:**

```bash
npx wdio run wdio.conf.js --spec ./test/specs/github-1.js
```

**Все тесты GitHub:**

```bash
npx wdio run wdio.conf.js --spec "./test/specs/github-*.js"
```

---

## Конфигурация

Основные параметры `wdio.conf.js`:

| Параметр | Значение |
|---|---|
| Runner | `local` |
| Framework | `mocha` |
| Browser | `chrome` |
| Reporter | `spec` |
| Wait timeout | `10000 ms` |
| Mocha timeout | `60000 ms` |

Результаты выполнения тестов отображаются в консоли.

---

## Назначение проекта

Практика автоматизированного UI-тестирования на JavaScript и WebdriverIO.