# WebdriverIO Smoke & UI Tests

Проект автоматизированного тестирования UI с использованием WebdriverIO.

## Описание

Это простой набор smoke-тестов для проверки основных страниц документации WebdriverIO и базовой навигации по сайту.

## Технологический стек

* JavaScript / TypeScript (в зависимости от реализации)
* WebdriverIO
* WDIO testrunner
* Allure (отчётность)*
* Node.js
* @wdio/cli, @wdio/local-runner

## Настройка

### 1. Установка зависимостей

```bash
npm install

### 2. Запуск всех тестов

npx wdio run wdio.conf.js

или

npm test
