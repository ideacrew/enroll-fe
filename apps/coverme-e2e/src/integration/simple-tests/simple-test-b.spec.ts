/* eslint-disable @typescript-eslint/naming-convention */
import {
  checkNameInApplicantList,
  editApplicationButton,
  applicationsStub,
  michaelEwingInitial,
} from '@enroll/financial-assistance/testing';

// This test case does not use the FAA flow
xdescribe('CMS Simple Test Case B', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
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
