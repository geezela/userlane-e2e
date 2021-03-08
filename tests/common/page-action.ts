class PageAction {
  public loadBaseUrl(): PageAction {
    it("should load base url", () => {
      cy.visit("https://www.userlane.com/careers/");
    });

    return this;
  }

  public assertTextInElement(
    expectedText: string,
    getElement: () => Cypress.Chainable<JQuery<HTMLElement>>
  ): PageAction {
    it(`should see element with text: ${expectedText}`, () => {
      expect(getElement().contains(expectedText));
    });

    return this;
  }

  public waitForElementVisible(
    elementName: string,
    getElement: () => Cypress.Chainable<JQuery<HTMLElement>>
  ): PageAction {
    it(`should wait for an element: ${elementName}`, () => {
      getElement();
    });

    return this;
  }

  public act(description: string, action: () => {}): PageAction {
    it(`should ${description}`, action);

    return this;
  }
}

export default new PageAction();
