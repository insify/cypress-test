import { DoomalPage } from '../../integration/doomal.page';
import { InventoryAndGoodPage } from '../../integration/inventory-and-good.page';
import { HighCareOrCheckoutPage } from '../../integration/high-care-or-checkout.page';

const doomalPage = new DoomalPage();
const inventoryAndGoodPage = new InventoryAndGoodPage()
const highCareOrCheckoutPage = new HighCareOrCheckoutPage();

describe('Navigating in doomal page', () => {
    beforeEach(() => {
        cy.visit('https://doomal.github.io/');
    });

    it('No activity check', () => {
        doomalPage.clickNextPage();
        doomalPage.verifyNoActivityMessage();
    });

    it('Transition to second page selecting one option', () => {
        doomalPage.clickOneOptionRandom();
        doomalPage.clickNextPage();
        inventoryAndGoodPage.checkZeroValueOfGoods();
    });

    it('Check error on 10M', () => {
        doomalPage.clickOneOptionRandom();
        doomalPage.clickNextPage();
        inventoryAndGoodPage.addMoreThanTenMill();
        inventoryAndGoodPage.clickNext();
        inventoryAndGoodPage.verifyWhoaError();
    });

    it('Check error on 1000', () => {
        doomalPage.clickOneOptionRandom();
        doomalPage.clickNextPage();
        inventoryAndGoodPage.addLessThanThousand();
        inventoryAndGoodPage.clickNext();
        inventoryAndGoodPage.verifyMoreStuffError();
    });

    it('check error on negative', () => {
        doomalPage.clickOneOptionRandom();
        doomalPage.clickNextPage();
        inventoryAndGoodPage.addNegativeNUmber();
        inventoryAndGoodPage.clickNext();
        inventoryAndGoodPage.verifyNegativeError();
    });

    it('check high care on more than 4 activities', () => {
        doomalPage.selectFiveOptions();
        doomalPage.clickNextPage();
        inventoryAndGoodPage.addThousand();
        inventoryAndGoodPage.clickNext();
        highCareOrCheckoutPage.verifyHighCarePage();
    });

    it('Checkout Page', () => {
        doomalPage.clickOneOptionRandom();
        doomalPage.clickNextPage();
        inventoryAndGoodPage.addThousand();
        inventoryAndGoodPage.clickNext();
        highCareOrCheckoutPage.verifyCheckoutPage();
    });
});