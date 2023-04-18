export const initialNavigation = () => {
  cy.visit('/');

  // Start the form
  cy.get('[data-cy="start-link"]').click();
  cy.get('[data-cy="start-tax-year"]').click();
  cy.get('[id="year-select-2022"]').click();
  cy.get('[data-cy="continue-to-household"]').click();
};
