class OfferDetail {

  private get applyButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".template-btn-submit").last();
  }

  public get jobOffer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".job-title");
  }

  public clickApplyButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.applyButton.click();
  }
}

export default new OfferDetail();
