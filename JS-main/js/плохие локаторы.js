"use strict";

const { Builder, By } = require('selenium-webdriver');
const assert = require('chai').assert;
const logger = require('winston');


async function citrusBuy() {
    const driver = await new Builder().forBrowser('chrome').build();
    
    try {

        logger.info('1. Откройте страницу в браузере https://www.citrus.ua/uk/');
        await driver.get('https://www.citrus.ua/uk/');
        await driver.manage().window().maximize();

        logger.info('2. Переключите страницу на русский язык и убедитесь, что страница переведена');
        await driver.findElement(By.className('languages-0-2-35')).click();
        let checkLang = await driver.findElement(By.className('ml8 dashed-text')).getText();
        assert.equal(checkLang, 'Войти', 'check language');

        logger.info('3. Найти через поиск Apple iPhone 13 256GB Starlight');
        await driver.findElement(By.className('pr search-0-2-12')).click();
        await driver.findElement(By.className('full-height on bd0 pr16 pl16 input-0-2-57 inputFull-0-2-58')).sendKeys('Apple iPhone 13 256GB Starlight (MLQ73)' + "\n");
       

        logger.info('4. Убедиться что найдено только 1 модель');
        let modelSum = await driver.findElements(By.className('catalog__items'));
        assert.equal(modelSum.length, 1, 'find one model');

        logger.info('5. Перейти к покупке')
        await driver.findElement(By.className('image')).click();

        logger.info('6. Купить и перейти в корзину')
        await driver.findElement(By.className('df jcc bd0 cup on aic uppercase medium df')).click();
        await driver.findElement(By.linkText('Перейти в корзину')).click(); 

        logger.info('7. Добавить к заказу 4 телефона и убедиться что сумма заказа 135996 грн')
        let addPhone = await driver.findElement(By.xpath('//*[@id="portal-root"]/div/div/div/div[2]/div[1]/div/div[1]/div[4]/div/div/button[2]'));
        for (let i = 0; i < 3; i++) {
            await addPhone.click();
        } 
        let sum = await driver.findElement(By.xpath('//*[@id="portal-root"]/div/div/div/div[2]/div[1]/div/div[1]/div[4]/div/span')).getText();
        assert.equal(sum, '135 996 ₴', 'Check sum');

        logger.info('8. Оформить заказ');
        await driver.findElement(By.className('df jcc bd0 cup on aic uppercase medium root-0-2-181 root-d20-0-2-394 large-0-2-191 contained-0-2-189 full-width')).click();

       } finally {
       // await driver.quit();
    }
}

citrusBuy();