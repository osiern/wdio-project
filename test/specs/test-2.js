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

  it('Проверить ссылку JSON Wire Protocol', async () => {
    await browser.url('https://webdriver.io/docs/api/protocols');

    const link = await $('=JSON Wire Protocol').$('a');

    await expect(link).toHaveAttribute('href', expect.stringContaining('#'));
  });

  it('Поиск работает и принимает текст', async () => {
    await $('.DocSearch-Button').click();

    const input = await $('.DocSearch-Input');

    await input.setValue('test is DONE!');

    await expect(input).toHaveValue('test is DONE!');

    await browser.keys('Escape');
  });

});