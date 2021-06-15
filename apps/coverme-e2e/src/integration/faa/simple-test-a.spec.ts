/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  bettyCurtisInitial,
  dwayneCurtisInitial,
} from '@enroll/testing/stubs/financial-assistance';

import {
  addMemberToHouseholdButton,
  enterBasicInformation,
  livesWithPrimaryYesLabel,
  needsCoverageLabel,
} from '@enroll/testing/e2e';

describe('CMS Test Case A', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('add Betty Curtis to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      dwayneCurtisInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    // Name, DOB, SSN, Gender, Relationship
    enterBasicInformation(bettyCurtisInitial);

    // Residence
    livesWithPrimaryYesLabel().click();

    // Coverage
    needsCoverageLabel(bettyCurtisInitial.is_applying_coverage).click();

    // Override initial applicants with new payload
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      dwayneCurtisInitial,
      bettyCurtisInitial,
    ]);

    // No coverage needed, so link should add member and
    // return to list of applicants
    addMemberToHouseholdButton().click();
  });
});
