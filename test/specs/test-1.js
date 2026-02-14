describe('Смоук сайта WEBDRIVER.IO, тест №1', () => {
  it('Открываем сайт', async () => {
    await browser.url('https://webdriver.io/');

    await expect(browser).toHaveUrl('https://webdriver.io/');
    await expect(browser).toHaveTitle(expect.stringContaining('WebdriverIO'));
  });

  it('Кликаем на API', async () => {
    const apiButton = await $('a[href="/docs/api"]');
    await apiButton.waitForDisplayed();
    await apiButton.click();

    await expect(browser).toHaveUrl(expect.stringContaining('/docs/api'));
  });

  it('Печатаем в терминале текущий адрес', async () => {
    const currentUrl = await browser.getUrl();
    console.log('Текущий URL:', currentUrl);

    await expect(currentUrl).toContain('/docs/api');
  });

  it('Распечатываем заглавие страницы', async () => {
    const heading = await $('article h1');
    await heading.waitForDisplayed({ timeout: 10000 });

    const title = await heading.getText();
    console.log('Заголовок страницы:', title);

    await expect(title).not.toBe('');
    await expect(title.toLowerCase()).toContain('introduction');
  });

  it('Получаем href JSON Wire Protocol', async () => {
    await browser.url('https://webdriver.io/docs/api/protocols');

    const header = await $('//*[text()="JSON Wire Protocol"]');
    await header.waitForDisplayed({ timeout: 10000 });

    const link = await header.$('a');
    const href = await link.getAttribute('href');

    console.log('JSON Wire Protocol href:', href);

    await expect(href).toBeTruthy();
    await expect(href).toContain('#');
  });

  it('Ввод и добавление текста в строку поиска', async () => {
    const searchBtn = await $('.DocSearch-Button');
    await searchBtn.click();

    const searchInput = await $('.DocSearch-Input');
    await searchInput.setValue('test is ');
    await browser.pause(3000);

    let inputValue = await searchInput.getValue();
    await expect(inputValue).toBe('test is ');

    await searchInput.addValue('DONE!');
    await browser.pause(3000);

    inputValue = await searchInput.getValue();
    console.log('Значение в поле поиска:', inputValue);
    await expect(inputValue).toBe('test is DONE!');

    await browser.keys('Escape');
  });
});
