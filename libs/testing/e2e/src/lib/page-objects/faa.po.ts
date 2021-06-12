export const firstName = () => cy.get('[data-cy="first-name-input"]');
export const lastName = () => cy.get('[data-cy="last-name-input"]');
export const dob = () => cy.get('[data-cy="date-of-birth-input"]');
export const ssn = () => cy.get('[data-cy="ssn-input"]');
export const genderMale = () => cy.get('[data-cy="gender-male-label"]');
export const genderFemale = () => cy.get('[data-cy="gender-female-label"]');
export const relationship = () => cy.get('[data-cy="relationship-select"]');
export const livesWithPrimaryYes = () =>
  cy.get('[data-cy="lives-with-primary-yes"]');
export const livesWithPrimaryNo = () =>
  cy.get('[data-cy="lives-with-primary-no"]');
export const needsCoverageYes = () => cy.get('[data-cy="needs-coverage-yes"]');
export const needsCoverageNo = () => cy.get('[data-cy="needs-coverage-no"]');
export const addMemberToHousehold = () =>
  cy.get('[data-cy="add-member-to-household"]');
