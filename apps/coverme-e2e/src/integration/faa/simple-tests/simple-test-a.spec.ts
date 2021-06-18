/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  bettyCurtisInitial,
  dwayneCurtisInitial,
} from '@enroll/testing/stubs/financial-assistance';

import {
  addNonApplicant,
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';

describe('CMS Simple Test Case A', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Betty Hurtis as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      dwayneCurtisInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();

    checkNameInApplicantList(dwayneCurtisInitial);
  });

  it('add Betty Curtis to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      dwayneCurtisInitial,
    ]);
    cy.visit('/financial-assistance');

    // Override initial applicants with new payload
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      dwayneCurtisInitial,
      bettyCurtisInitial,
    ]);
    addNonApplicant(bettyCurtisInitial);
    checkNameInApplicantList(bettyCurtisInitial);
  });
});
