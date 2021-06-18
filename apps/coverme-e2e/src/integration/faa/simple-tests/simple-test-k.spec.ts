/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  sarahNoelflInitial,
} from '@enroll/testing/stubs/financial-assistance';

import {
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';

describe('CMS Simple Test Case K', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Betty Hurtis as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sarahNoelflInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();

    checkNameInApplicantList(sarahNoelflInitial);
  });
});
