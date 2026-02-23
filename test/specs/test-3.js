describe('Смоук сайта WEBDRIVER.IO, тест №2', () => {

    let originalWindow;

    it('Открыть страницу API Docs', async () => {
        await browser.url('https://webdriver.io/docs/api/');
        originalWindow = await browser.getWindowHandle();
    });

    it('Открыть WebDriver в новой вкладке', async () => {
        const webDriverLink = await $('article a[href="/docs/api/webdriver"]');
        const href = await webDriverLink.getAttribute('href');

        await browser.newWindow(`https://webdriver.io${href}`);
    });

    it('Вернуться на вкладку API Docs', async () => {
        await browser.switchToWindow(originalWindow);
    });

    it('Проверить, что заголовок = Introduction', async () => {
        const header = await $('article header h1');

        await browser.waitUntil(
            async () => (await header.getText()) === 'Introduction',
            {
                timeout: 5000,
                timeoutMsg: 'Header text did not become Introduction'
            }
        );
    });

    it('Сделать скриншот заголовка', async () => {
        const header = await $('article header h1');
        await header.saveScreenshot('./header.png');
    });

    it('Проверка отображения X-ссылки до скролла', async () => {
        const xLink = await $('footer a[href="https://x.com/webdriverio"]');

        console.log(
            'Before scroll isDisplayed:',
            await xLink.isDisplayed()
        );

        console.log(
            'Before scroll isDisplayed (withinViewport):',
            await xLink.isDisplayed({ withinViewport: true })
        );
    });

    it('Скролл к X-ссылке', async () => {
        const xLink = await $('footer a[href="https://x.com/webdriverio"]');
        await xLink.scrollIntoView();
    });

    it('Проверка отображения X-ссылки после скролла', async () => {
        const xLink = await $('footer a[href="https://x.com/webdriverio"]');

        console.log(
            'After scroll isDisplayed:',
            await xLink.isDisplayed()
        );

        console.log(
            'After scroll isDisplayed (withinViewport):',
            await xLink.isDisplayed({ withinViewport: true })
        );
    });

    it('Проверка фокуса Blog до клика', async () => {
        const blogLink = await $('a[href="/blog"]');
        console.log('Before click isFocused:', await blogLink.isFocused());
    });

    it('Клик по Blog', async () => {
        const blogLink = await $('a[href="/blog"]');
        await blogLink.click();
    });

    it('Проверка фокуса Blog после клика', async () => {
        const blogLink = await $('a[href="/blog"]');
        console.log('After click isFocused:', await blogLink.isFocused());
    });

});