describe('slcsp-calculator', () => {
  beforeEach(() => {
    cy.visit('/');

    // Start the form
    cy.get('[data-cy="start-link"]').click();
    cy.get('[data-cy="start-tax-year"]').click();
    cy.get('[data-cy="continue-to-household"]').click();
  });

  it('should fill out the form for 2 persons with no change in residence', () => {
    ////////////////////
    // Household Page //
    ////////////////////
    const householdCount = 2;
    const householdMemberNames = ['John', 'Suzy'];

    // Initial household page state
    cy.get('[data-cy="navigate-to-member-details"]').should('be.disabled');

    // Should start with one person in household
    // Text input should initially have a value of one,
    // This type() command selects the text and replaces it with 2
    cy.get('[data-cy="household-count"]').type(`{selectAll}${householdCount}`);
    cy.get('[data-cy="household-confirmation-yes"]').click();

    // Household list should have two members
    cy.get('enroll-household-member-name').should(
      'have.length',
      householdCount
    );

    // Fill in names of household members
    cy.get('[data-cy="member-0"]').type(householdMemberNames[0]);
    cy.get('[data-cy="member-1"]').type(householdMemberNames[1]);

    // Select relationship between primary and secondary member
    cy.get('[data-cy="relationship-1"]')
      .select('Spouse')
      .should('have.value', 'spouse');

    cy.get('[data-cy="navigate-to-member-details"]').click();

    //////////////////////////
    // Member 1 Detail Page //
    //////////////////////////

    // Initial Member details page state
    cy.get('[data-cy="member-heading"]').contains(
      `Tell us about ${householdMemberNames[0]}`
    );
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

    ////////////////////////////
    // Member 1 Coverage Page //
    ////////////////////////////

    // Initial Member coverage page state
    cy.get('h1').contains(`${householdMemberNames[0]}: Marketplace Coverage`);

    // Valid coverage includes any combination of selected checkboxes
    // Including all or none
    cy.get('[data-cy="navigate-to-next-step"]').should('not.be.disabled');

    // Don't set any coverage months in this test
    cy.get('[data-cy="navigate-to-next-step"]').click();

    //////////////////////////
    // Member 2 Detail Page //
    //////////////////////////

    // Initial Member details page state
    cy.get('[data-cy="member-heading"]').contains(
      `Tell us about ${householdMemberNames[1]}`
    );
    cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');

    // DOB Form
    cy.get('[data-cy="month-input"]').type('1');
    cy.get('[data-cy="day-input"]').type('1');
    cy.get('[data-cy="year-input"]').type('1979');

    // Secondary members are not required to enter residence information
    cy.get('[data-cy="zipcode-input-0"]').should('not.exist');

    cy.get('[data-cy="navigate-to-member-coverage"]').click();

    ////////////////////////////
    // Member 2 Coverage Page //
    ////////////////////////////

    // Initial Member coverage page state
    cy.get('h1').contains(`${householdMemberNames[1]}: Marketplace Coverage`);

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
