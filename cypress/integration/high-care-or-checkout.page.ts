export class HighCareOrCheckoutPage {
    verifyHighCarePage() {
        cy.get('div[tabindex="-1"]').contains('This is HighCare page!')
    }

    verifyCheckoutPage() {
        cy.get('div[tabindex="-1"]').contains('Hurray! This is Checkout page!');
    }
}