const { check } = require('../helpers/check');

describe('TC-004: Публичный репозиторий GitHub', () => {
  const DATA = {
    url: 'https://github.com/webdriverio/webdriverio',
    selectors: {
      code: 'a[href="/webdriverio/webdriverio"]',
      issues: 'a[href="/webdriverio/webdriverio/issues"]',
    },
  };

  it('Открыть публичный репозиторий', async () => {
    await browser.url(DATA.url);
  });

  check('Проверить URL репозитория', async () => {
    await expect(browser).toHaveUrl(DATA.url);
  });

  check('Проверить вкладку Code', async () => {
    await expect($(DATA.selectors.code)).toBeDisplayed();
  });

  check('Проверить вкладку Issues', async () => {
    await expect($(DATA.selectors.issues)).toBeDisplayed();
  });
});
