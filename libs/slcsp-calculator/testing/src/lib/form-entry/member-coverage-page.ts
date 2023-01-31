import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

export const fillInMemberCoveragePage = (member: HouseholdMember) => {
  cy.get('h1').contains(`${member.name}: Marketplace Coverage`);

  // Valid coverage includes any combination of selected checkboxes
  // Including all or none
  cy.get('[data-cy="navigate-to-next-step"]').should('not.be.disabled');

  // Don't set any coverage months in this test
  cy.get('[data-cy="navigate-to-next-step"]').click();
};
