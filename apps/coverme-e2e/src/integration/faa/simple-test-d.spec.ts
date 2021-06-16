/* eslint-disable @typescript-eslint/naming-convention */
import {
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';
import {
  applications,
  geraldRiversInitial,
} from '@enroll/testing/stubs/financial-assistance';

describe('CMS Test Case D', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('displays Gerald Rivers in the existing application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      geraldRiversInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();
    checkNameInApplicantList(geraldRiversInitial);
  });
});
