/* eslint-disable @typescript-eslint/naming-convention */
import {
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';
import {
  applications,
  michaelEwingInitial,
} from '@enroll/testing/stubs/financial-assistance';

describe('CMS Simple Test Case B', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Michael Ewing as existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      michaelEwingInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();
    checkNameInApplicantList(michaelEwingInitial);
  });
});
