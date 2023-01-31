import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

export const fillInHouseholdPage = (members: HouseholdMember[]) => {
  const householdCount = members.length;

  // Initial household page state
  cy.get('[data-cy="navigate-to-member-details"]').should('be.disabled');
  cy.get('[data-cy="household-count"]').should('have.value', '1');
  cy.get('[data-cy="household-confirmation-yes"]').should('not.be.checked');
  cy.get('[data-cy="household-confirmation-no"]').should('not.be.checked');
  cy.get('[data-cy="household-members-list"]').should('not.exist');

  // Should start with one person in household
  // Text input should initially have a value of one,
  // This type() command selects the text and replaces it with 2
  cy.get('[data-cy="household-count"]').type(`{selectAll}${householdCount}`);
  cy.get('[data-cy="household-confirmation-yes"]').click();

  // Household list should have two members
  cy.get('enroll-household-member-name').should('have.length', householdCount);

  // Fill in names of household members
  for (const [index, member] of members.entries()) {
    cy.get(`[data-cy="member-${index}"]`).type(member.name);
  }

  for (const [index, member] of members.entries()) {
    // If this is the first member, skip to next iteration
    if (index === 0) {
      continue;
    }

    if (member.relationship === null) {
      continue;
    }

    // Select relationship between primary and secondary member
    cy.get(`[data-cy="relationship-${index}"]`)
      .select(member.relationship)
      .should('have.value', member.relationship);
  }

  cy.get('[data-cy="navigate-to-member-details"]').click();
};
