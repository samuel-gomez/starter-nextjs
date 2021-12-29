/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000';

context('Home page', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Should find our welcome page and message', () => {
    cy.get('h1').contains('Welcome');
  });
});
