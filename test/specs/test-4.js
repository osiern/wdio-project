describe('Смоук сайта WebdriverIO. Методы работы с элементами и браузером', () => {
  it('Открыть страницу API', async () => {
    await browser.url('https://webdriver.io/docs/api/');
  });

  it('Открыть страницу WebDriver Protocol в новой вкладке', async () => {
    const link = await $('a[href="/docs/api/webdriver"]');

    const href = await link.getAttribute('href');

    await browser.newWindow(`https://webdriver.io${href}`);
  });

  it('Переключиться на вкладку WebDriver Protocol', async () => {
    await browser.switchWindow('webdriver');
  });

  it('Проверить, что заголовок страницы отображается', async () => {
    const element = await $('h1');

    console.log(await element.isDisplayed());
  });

  it('Вернуться на вкладку API', async () => {
    await browser.switchWindow('https://webdriver.io/docs/api/');
  });

  it('Дождаться появления заголовка Introduction', async () => {
    const title = await $('h1');

    await browser.waitUntil(async () => {
      return (await title.getText()) === 'Introduction';
    });
  });

  it('Сделать скриншот заголовка страницы', async () => {
    const title = await $('h1');

    await title.saveScreenshot('./postHeaderTitle.png');
  });

  it('Проверить видимость ссылки X до скролла', async () => {
    const twitter = await $('a[href="https://x.com/webdriverio"]');

    console.log(await twitter.isDisplayed());
  });

  it('Проверить, что ссылка X находится в области видимости до скролла', async () => {
    const twitter = await $('a[href="https://x.com/webdriverio"]');

    console.log(await twitter.isDisplayed({ withinViewport: true }));
  });

  it('Прокрутить страницу к ссылке X', async () => {
    await $('a[href="https://x.com/webdriverio"]').scrollIntoView();
  });

  it('Проверить видимость ссылки X после скролла', async () => {
    const twitter = await $('a[href="https://x.com/webdriverio"]');

    console.log(await twitter.isDisplayed());
  });

  it('Проверить, что ссылка X находится в области видимости после скролла', async () => {
    const twitter = await $('a[href="https://x.com/webdriverio"]');

    console.log(await twitter.isDisplayed({ withinViewport: true }));
  });

  it('Проверить, что ссылка Blog не находится в фокусе', async () => {
    const blog = await $('a[href="/blog"]');

    console.log(await blog.isFocused());
  });

  it('Перейти на страницу Blog', async () => {
    const blog = await $('a[href="/blog"]');

    await blog.click();
  });

  it('Проверить, что ссылка Blog находится в фокусе', async () => {
    const blog = await $('a[href="/blog"]');

    console.log(await blog.isFocused());
  });
});
