/// <reference types="Cypress" />

describe('Scenario 1: Visiting Perkbox login page.', function() {

  it('User is on the Perkbox login page', function () {

    cy.visit('https://app.perkbox.com');

    cy.url()
      .should('include', '/welcome/login');

    cy.get('form[form=global-login]').within(function() {

      cy.get('input[type=email]')
        .should('have.attr', 'placeholder', 'Enter your email');

      cy.get('button[type=button]')
        .should('have.id', 'login__global-login__btn-submit');

    });

  });

});
