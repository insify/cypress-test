export class InventoryAndGoodPage {
    checkZeroValueOfGoods(){
        cy.get('input[name="inventory"]').should('have.attr','placeholder',"0");
    }

    addMoreThanTenMill() {
        cy.get('input[type="number"]').type('100000000');
    }

    addLessThanThousand() {
        cy.get('input[type="number"]').type('999');
    }

    addThousand() {
        cy.get('input[type="number"]').type('1000');
    }

    addNegativeNUmber() {
        cy.get('input[type="number"]').type('-1');
    }

    verifyNegativeError(){
        cy.get('div[class="error-message"]').contains('You need to have more stuff to run your business')
    }

    verifyWhoaError() {
        cy.get('div[class="error-message"]').contains('Whoah, Scrooge McDuck');
    }

    verifyMoreStuffError(){
        cy.get('div[class="error-message"]').contains('You need to have more stuff to run your business');
    }

    clickNext(){
        cy.get('button[type="submit"]').click()
    }
}