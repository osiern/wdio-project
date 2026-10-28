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
    await expect(browser).toHaveTitle(expect.stringContaining(DATA.title));
  });
});
