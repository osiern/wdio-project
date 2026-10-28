const { check } = require('../helpers/check');

describe('TC-002: Форма авторизации GitHub', () => {
  const DATA = {
    url: 'https://github.com/login',
    selectors: {
      login: '#login_field',
      password: '#password',
      submit: 'input[type="submit"][value="Sign in"]',
    },
  };

  it('Открыть страницу авторизации', async () => {
    await browser.url(DATA.url);
  });

  check('Проверить URL страницы', async () => {
    await expect(browser).toHaveUrl(DATA.url);
  });

  check('Проверить поле логина', async () => {
    await expect($(DATA.selectors.login)).toBeDisplayed();
  });

  check('Проверить поле пароля', async () => {
    await expect($(DATA.selectors.password)).toBeDisplayed();
  });

  check('Проверить кнопку входа', async () => {
    await expect($(DATA.selectors.submit)).toBeDisplayed();
  });
});
