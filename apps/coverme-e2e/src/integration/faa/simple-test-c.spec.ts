/* eslint-disable @typescript-eslint/naming-convention */
import {
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';
import {
  aishaModellInitial,
  applications,
} from '@enroll/testing/stubs/financial-assistance';

describe('CMS Test Case C', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('displays Aisha Modell in the existing application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      aishaModellInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();
    checkNameInApplicantList(aishaModellInitial);
  });
});
