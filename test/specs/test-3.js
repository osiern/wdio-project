describe('Смоук сайта WEBDRIVER.IO, тест №2', () => {

    it('Открываем страницу', async () => {
        await browser.url('https://webdriver.io/docs/api.html');
    });

    it('Получаем ссылку JSONWire protocol и открываем в новой табе', async () => {
        const jsonWireLink = await $('//*[text()="JSONWire protocol"]');
        const href = await jsonWireLink.getAttribute('href');

        await browser.newWindow(href);
    });
});