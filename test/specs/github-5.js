const { check } = require('../helpers/check');

describe('TC-005: Навигация по репозиторию GitHub', () => {
  const DATA = {
    repositoryUrl: 'https://github.com/webdriverio/webdriverio',
    issuesUrl: 'https://github.com/webdriverio/webdriverio/issues',
    selectors: {
      issues: 'a[href="/webdriverio/webdriverio/issues"]',
      main: 'main',
    },
  };

  it('Открыть публичный репозиторий', async () => {
    await browser.url(DATA.repositoryUrl);
  });

  check('Проверить URL репозитория', async () => {
    await expect(browser).toHaveUrl(DATA.repositoryUrl);
  });

  it('Перейти во вкладку Issues', async () => {
    const issues = $(DATA.selectors.issues);
    await issues.waitForClickable();
    await issues.click();
  });

  check('Проверить URL страницы Issues', async () => {
    await expect(browser).toHaveUrl(DATA.issuesUrl);
  });

  check('Проверить основной блок страницы', async () => {
    await expect($(DATA.selectors.main)).toBeDisplayed();
  });
});
