/// <reference types="Cypress" />

describe('Scenario 2: Login with valid email address', function() {

  beforeEach(function() {

    visitLoginPage();

  })

  it('User attempts to login without email address', function() {

    cy.get('button[type=button]')
      .click();

    cy.contains('Please enter your email');

  });

  it('User attempts to login with invalid email address', function() {

    cy.get('input[type=email]')
      .type('xxx', {
        delay: 100
      })
      .should('have.value', 'xxx');

    cy.get('button[type=button]')
      .click();

    cy.contains('This email address is not valid');

  });

  it('User attempts to login with incorrect email address', function() {
    cy.get('input[type=email]')
      .clear()
      .type('kirt@perkbox.co.uk', {
        delay: 100
      })
      .should('have.value', 'kirt@perkbox.co.uk');

    cy.get('button[type=button]')
      .click();

    cy.contains('User is not found');
  });

  it('User attempts to login with valid email address', function() {

    cy.get('input[type=email]')
      .clear()
      .type('pooja@perkbox.co.uk', {
        delay: 100
      })
      .should('have.value', 'pooja@perkbox.co.uk');

    cy.get('button[type=button]')
      .click();

    cy.get('h3 ~ div').should('have.length', 8);
  });

});


const visitLoginPage = function() {

  cy.visit('https://app.perkbox.com');

};
