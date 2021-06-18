/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  helenHartman,
  martinHartmanInitial,
  robertHartman,
} from '@enroll/testing/stubs/financial-assistance';

import {
  addApplicant,
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';

describe('CMS Simple Test Case L', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Martin Hartman as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      martinHartmanInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();
    checkNameInApplicantList(martinHartmanInitial);
  });

  it('should add Helen Hartman to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      martinHartmanInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      martinHartmanInitial,
      helenHartman,
    ]);
    addApplicant(helenHartman);
    checkNameInApplicantList(helenHartman);
  });

  it('should add Robert Hartman to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      martinHartmanInitial,
      helenHartman,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      martinHartmanInitial,
      helenHartman,
      robertHartman,
    ]);
    addApplicant(robertHartman);
    checkNameInApplicantList(robertHartman);
  });
});
