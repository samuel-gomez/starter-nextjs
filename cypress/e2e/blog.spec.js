/// <reference types="cypress" />

context('Blog page', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('Should find My blog and posts on Blog page', () => {
    cy.get('p').contains('My blog');
    cy.get('li:first-child').contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
});
