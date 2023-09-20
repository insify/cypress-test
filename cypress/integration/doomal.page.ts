import {InventoryAndGoodPage} from "./inventory-and-good.page";

export class DoomalPage {
    clickOneOptionRandom(){
        const randomInt = Math.floor(Math.random() * 5) + 1
        cy.get(`input[value="${randomInt}"]`).click()
    }

    selectFiveOptions() {
        for(let i=1; i<6; i++){
            cy.get(`input[value="${i}"]`).click()
        }

    }

    clickNextPage() {
        cy.get('#root > div > div > form > div > button').click();
    }

    verifyNoActivityMessage() {
        cy.get('div[class="error-message"]').contains("No activity can lead to health problems");
    }
}