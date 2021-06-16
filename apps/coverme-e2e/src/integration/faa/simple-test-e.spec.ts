/* eslint-disable @typescript-eslint/naming-convention */
import {
  alexzanderSimonInitial,
  applications,
  finleySimonInitial,
  lailaSimonInitial,
  princetonSimonInitial,
  williamSimonInitial,
} from '@enroll/testing/stubs/financial-assistance';

import {
  addApplicant,
  addNonApplicant,
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/testing/e2e';

describe('CMS Test Case E', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Laila Simon as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();
    checkNameInApplicantList(lailaSimonInitial);
  });

  it('add William Simon to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
    ]);

    addNonApplicant(williamSimonInitial);
    checkNameInApplicantList(williamSimonInitial);
  });

  it('add Finley Simon to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
      finleySimonInitial,
    ]);

    addApplicant(finleySimonInitial);
    checkNameInApplicantList(finleySimonInitial);
  });

  it('add Princeton Simon to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
      finleySimonInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
      finleySimonInitial,
      princetonSimonInitial,
    ]);

    addApplicant(princetonSimonInitial);
    checkNameInApplicantList(princetonSimonInitial);
  });

  it('add Alexzander Simon to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
      finleySimonInitial,
      princetonSimonInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
      finleySimonInitial,
      princetonSimonInitial,
      alexzanderSimonInitial,
    ]);

    addApplicant(alexzanderSimonInitial);
    checkNameInApplicantList(alexzanderSimonInitial);
  });
});
