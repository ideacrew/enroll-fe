/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  initialApplicantsSimpleA,
  updatedApplicantsSimpleA,
} from '@enroll/testing/stubs/financial-assistance';

import {
  addMemberToHousehold,
  dob,
  firstName,
  genderFemale,
  lastName,
  livesWithPrimaryYes,
  needsCoverageNo,
  relationship,
  ssn,
} from '@enroll/testing/e2e';

describe('CMS Test Case A', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
    cy.intercept(
      { method: 'GET', url: '/applications/**/applicants' },
      initialApplicantsSimpleA
    );
    cy.visit('/financial-assistance');
  });

  it('add Betty Curtis to application', () => {
    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    // Name, DOB, SSN, Gender, Relationship
    firstName().type('Betty');
    lastName().type('Curtis');
    dob().type('1961-01-01');
    ssn().type('123-45-6789');
    genderFemale().click();
    relationship().select('Spouse');

    // Residence
    livesWithPrimaryYes().click();

    // Coverage
    needsCoverageNo().click();

    // Override initial applicants with new payload
    cy.intercept(
      { method: 'GET', url: '/applications/**/applicants' },
      updatedApplicantsSimpleA
    );

    // No coverage needed, so link should add member and
    // return to list of applicants
    addMemberToHousehold().click();
  });
});
