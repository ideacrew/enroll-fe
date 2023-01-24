describe('slcsp-calculator', () => {
  beforeEach(() => {
    cy.visit('/');

    // Start the form
    cy.get('[data-cy="start-link"]').click();
    cy.get('[data-cy="start-tax-year"]').click();
    cy.get('[data-cy="continue-to-household"]').click();
  });

  it('should display welcome message', () => {
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

    // Member detail page should display Tell us about John
    cy.get('[data-cy="member-heading"]').should(
      'contain',
      'Tell us about John'
    );
  });
});
