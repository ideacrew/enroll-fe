import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

export const fillInMemberDetailPage = (member: HouseholdMember) => {
  const [residence] = member.residences;

  const { county } = residence;
  const { dob, name: memberName, primaryMember } = member;
  const { month, day, year } = dob;
  const { zipcode, fips, name: countyName, state } = county;

  cy.get('[data-cy="member-heading"]').contains(`Tell us about ${memberName}`);
  cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');

  // DOB Form
  cy.get('[data-cy="month-input"]').type(month);
  cy.get('[data-cy="day-input"]').type(day);
  cy.get('[data-cy="year-input"]').type(year);

  // Secondary members are not required to enter residence information
  if (primaryMember) {
    // Zip code search, after this is typed in an api call should be made
    cy.intercept(`**/counties/**/${zipcode}**`, {
      fixture: 'zipcode.json',
    }).as('zipcodeSearch');
    cy.get('[data-cy="zipcode-input-0"]').type(zipcode);
    cy.wait('@zipcodeSearch');

    cy.get('[data-cy="select-county"]').click();
    cy.get('[data-cy="zipcode-input-0"]').should(
      'have.value',
      `${zipcode}, ${countyName}, ${state}`
    );

    cy.get(`[data-cy="${fips}-select-all-months"]`).click();
  } else {
    cy.get('[data-cy="zipcode-input-0"]').should('not.exist');
  }

  // Select all months
  cy.get('[data-cy="navigate-to-member-coverage"]').click();
};
