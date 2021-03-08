import "cypress-file-upload";

class Apply {

  private get attachCV(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#resume-upload-input");
  }

  private get fullName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[name="name"]');
  }

  private get email(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[name="email"]');
  }

  private get phone(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[name="phone"]');
  }

  private get currentCompany(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[name="org"]');
  }

  private get salaryExpectation(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".card-field-input");
  }

  private get captcha(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".recaptcha-checkbox-border");
  }

  private get submitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-qa="btn-submit"]');
  }

  public get successIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".loading-indicator completed");
  }

  public get validationMsg(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".content-wrapper.application-page");
  }

  public chooseCV(fileName: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.attachCV.attachFile(fileName);
  }

  public clickAttachCV(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.attachCV.click();
  }

  public typeFullName(fullName: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.fullName.type(fullName);
  }

  public typeEmail(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.email.type(email);
  }

  public typePhone(phone: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.phone.type(phone);
  }

  public typeCurrentCompany(currentCompany: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.currentCompany.type(currentCompany);
  }

  public typeSalaryExpectation(salaryExpectation: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.salaryExpectation.type(salaryExpectation);
  }

  public clickCaptcha(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.captcha.click();
  }

  public clickSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.submitButton.click();
  }
}

export default new Apply();
