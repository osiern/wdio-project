describe('WebdriverIO docs smoke', () => {

  it('Открыть главную страницу', async () => {
    await browser.url('https://webdriver.io/');

    await expect(browser).toHaveUrl('https://webdriver.io/');
    await expect(browser).toHaveTitle(expect.stringContaining('WebdriverIO'));
  });

  it('Перейти в раздел API', async () => {
    const apiLink = await $('a[href="/docs/api"]');
    await apiLink.waitForClickable();
    await apiLink.click();

    const header = await $('article h1');
    await header.waitForDisplayed();

    await expect(browser).toHaveUrl(expect.stringContaining('/docs/api'));
    await expect(header).toHaveText(expect.stringContaining('Introduction'));
  });

  it('Проверить ссылку JSON Wire Protocol', async () => {
    await browser.url('https://webdriver.io/docs/api/protocols');

    const link = await $('a=JSON Wire Protocol');
    await link.waitForDisplayed();

    await expect(link).toHaveAttribute(
      'href',
      expect.stringContaining('selenium.dev')
    );
  });

  it('Поиск работает и принимает текст', async () => {
    const searchBtn = await $('.DocSearch-Button');
    await searchBtn.waitForClickable();
    await searchBtn.click();

    const input = await $('.DocSearch-Input');
    await input.waitForDisplayed();

    await input.setValue('test is DONE!');
    await expect(input).toHaveValue('test is DONE!');

    await browser.keys('Escape');
  });

});