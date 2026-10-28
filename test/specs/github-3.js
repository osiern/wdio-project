const { check } = require('../helpers/check');

describe('TC-003: Негативная авторизация GitHub', () => {
  const DATA = {
    url: 'https://github.com/login',
    login: 'nonexistent-user-qa-123456',
    password: 'invalid-password-123',
    selectors: {
      login: '#login_field',
      password: '#password',
      submit: 'input[type="submit"][value="Sign in"]',
      error: '#js-flash-container .flash-error',
    },
  };

  it('Открыть страницу авторизации', async () => {
    await browser.url(DATA.url);
  });

  it('Ввести некорректный логин', async () => {
    await $(DATA.selectors.login).setValue(DATA.login);
  });

  check('Проверить введённый логин', async () => {
    await expect($(DATA.selectors.login)).toHaveValue(DATA.login);
  });

  it('Ввести некорректный пароль', async () => {
    await $(DATA.selectors.password).setValue(DATA.password);
  });

  check('Проверить введённый пароль', async () => {
    await expect($(DATA.selectors.password)).toHaveValue(DATA.password);
  });

  it('Нажать кнопку входа', async () => {
    await $(DATA.selectors.submit).click();
  });

  check('Проверить сообщение об ошибке авторизации', async () => {
    await expect($(DATA.selectors.error)).toBeDisplayed();
  });
});
