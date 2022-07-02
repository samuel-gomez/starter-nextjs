/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should find our welcome page and message', () => {
    cy.get('h1').contains('Welcome');
  });
});
