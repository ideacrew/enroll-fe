describe('slcsp-calculator', () => {
  beforeEach(() => {
    cy.visit('/');

    // Start the form
    cy.get('[data-cy="start-link"]').click();
    cy.get('[data-cy="start-tax-year"]').click();
    cy.get('[data-cy="continue-to-household"]').click();
  });

  it('should fill out the form for 1 person with no change in residence', () => {
    ////////////////////
    // Household Page //
    ////////////////////

    // Initial household page state
    cy.get('[data-cy="navigate-to-member-details"]').should('be.disabled');

    // Should start with one person in household
    // Text input should have a value of 1
    cy.get('[data-cy="household-count"]').should('have.value', '1');

    // Household confirmation radio group should be unselected
    cy.get('[data-cy="household-confirmation-yes"]').should('not.be.checked');
    cy.get('[data-cy="household-confirmation-no"]').should('not.be.checked');
    cy.get('[data-cy="household-members-list"]').should('not.exist');

    // Click yes to confirm household members meet criteria,
    // should display household members list
    cy.get('[data-cy="household-confirmation-yes"]').click();
    cy.get('[data-cy="household-members-list"]').should('exist');

    // Fill in first name of primary person
    cy.get('[data-cy="member-0"]').type('John');
    cy.get('[data-cy="navigate-to-member-details"]').click();

    ////////////////////////
    // Member Detail Page //
    ////////////////////////

    // Initial Member details page state
    cy.get('[data-cy="member-heading"]').contains('Tell us about John');
    cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');

    // DOB Form
    cy.get('[data-cy="month-input"]').type('1');
    cy.get('[data-cy="day-input"]').type('1');
    cy.get('[data-cy="year-input"]').type('1979');

    // Zip code search, after this is typed in an api call should be made
    cy.intercept('**/counties/**/04003**', { fixture: 'zipcode.json' }).as(
      'zipcodeSearch'
    );
    cy.get('[data-cy="zipcode-input-0"]').type('04003');
    cy.wait('@zipcodeSearch');

    cy.get('[data-cy="zipcode-result-0"]').click();
    cy.get('[data-cy="zipcode-input-0"]').should(
      'have.value',
      '04003, Cumberland County, ME'
    );

    // Select all months
    cy.get('[data-cy="23005-select-all-months"]').click();
    cy.get('[data-cy="navigate-to-member-coverage"]').click();

    //////////////////////////
    // Member Coverage Page //
    //////////////////////////

    // Initial Member coverage page state
    cy.get('h1').contains('John: Marketplace Coverage');

    // Valid coverage includes any combination of selected checkboxes
    // Including all or none
    cy.get('[data-cy="navigate-to-next-step"]').should('not.be.disabled');

    // Don't set any coverage months in this test
    cy.get('[data-cy="navigate-to-next-step"]').click();

    /////////////////
    // Review page //
    /////////////////

    // Initial state
    cy.get('h1').contains('Review Your Information');

    cy.intercept('**/slcsp_calculator/estimate', {
      fixture: 'simple-results.json',
    }).as('slcsp-estimate');
    cy.get('[data-cy="continue-to-results"]').click();

    //////////////////
    // Results page //
    //////////////////

    cy.wait('@slcsp-estimate');
    cy.get('h1').contains('Your Results');
  });
});
