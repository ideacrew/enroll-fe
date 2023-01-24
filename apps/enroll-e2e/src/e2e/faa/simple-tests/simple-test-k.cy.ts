/* eslint-disable @typescript-eslint/naming-convention */
import {
  checkNameInApplicantList,
  editApplicationButton,
  applicationsStub,
  sarahNoelflInitial,
} from '@enroll/financial-assistance/testing';

xdescribe('CMS Simple Test Case K', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
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
