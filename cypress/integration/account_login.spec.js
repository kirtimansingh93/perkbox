/// <reference types="Cypress" />

describe('Scenario 4: Email field is pre-populated', function() {
  beforeEach(function() {

    accountLoginPage('pooja@perkbox.co.uk');

  });

  it("User's email address is already filled out", function() {

    cy.get('input[type=email]')
      .should('have.attr', 'value', 'pooja@perkbox.co.uk');

  });

});


const accountLoginPage = function(email) {

  cy.visit('https://app.perkbox.com');

  cy.get('input[type=email]')
    .type(email);

  cy.get('button[type=button]')
    .click();

  cy.get('div[name=poojatest2]')
    .click();

  cy.get('div ~ button:first-of-type')
    .click();

};
