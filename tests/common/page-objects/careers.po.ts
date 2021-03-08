class Careers {

    private get qaOfferButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="https://jobs.lever.co/userlane/c282ae0b-97bf-478f-a600-89a4b04c9411"]').last();
    }

    public get jobOffer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".job-title");
    }

    public clickQaOfferButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.qaOfferButton.invoke("removeAttr", "target").click();
    }
}

export default new Careers();
