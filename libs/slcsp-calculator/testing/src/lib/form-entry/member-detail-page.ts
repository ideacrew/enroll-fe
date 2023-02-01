import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';
import { fillInResidences } from './member-residences';

export const fillInMemberDetailPage = (member: HouseholdMember) => {
  const { residences } = member;

  const { dob, name: memberName, primaryMember } = member;
  const { month, day, year } = dob;

  cy.get('[data-cy="member-heading"]').contains(`Tell us about ${memberName}`);
  cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');

  // DOB Form
  cy.get('[data-cy="month-input"]').type(month);
  cy.get('[data-cy="day-input"]').type(day);
  cy.get('[data-cy="year-input"]').type(year);

  // Secondary members are not required to enter residence information
  if (primaryMember) {
    // Zip code search, after this is typed in an api call should be made
    fillInResidences(residences);
  } else {
    cy.get('[data-cy="zipcode-input-0"]').should('not.exist');
  }

  cy.get('[data-cy="navigate-to-member-coverage"]').click();
};
