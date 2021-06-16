/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  bettyHurtisInitial,
  dwayneHurtisInitial,
} from '@enroll/testing/stubs/financial-assistance';

import {
  addApplicant,
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';

describe('CMS Test Case H', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Betty Hurtis as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      bettyHurtisInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();

    checkNameInApplicantList(bettyHurtisInitial);
  });

  it('should add Dwayne Hurtis to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      bettyHurtisInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      bettyHurtisInitial,
      dwayneHurtisInitial,
    ]);

    addApplicant(dwayneHurtisInitial);

    checkNameInApplicantList(dwayneHurtisInitial);
  });
});
