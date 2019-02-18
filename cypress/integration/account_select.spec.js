/// <reference types="Cypress" />

describe('Scenario 3: Selecting an account to login to', function() {

  beforeEach(function() {

    visitLoginPage();

    enterEmail('pooja@perkbox.co.uk');

  });

  it('User can select an account to login into', function() {

    cy.get('div[name=poojatest2]')
      .contains('poojatest2')
      .click();

    cy.get('div ~ button:first-of-type')
      .click();

    cy.url()
      .should('include', 'poojatest2');

  });


});



const enterEmail = function(email) {

  cy.get('input[type=email]').type(email);

  cy.get('button[type=button]')
    .click();

};


const visitLoginPage = function() {

  cy.visit('https://app.perkbox.com');

};
