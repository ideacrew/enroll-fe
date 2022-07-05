/* eslint-disable @typescript-eslint/naming-convention */
import {
  applicationsStub,
  bettyCurtisInitial,
  dwayneCurtisInitial,
  addNonApplicant,
  checkNameInApplicantList,
  editApplicationButton,
} from '@enroll/financial-assistance/testing';

describe('CMS Simple Test Case A', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
  });

  it('should display Dwayne Curtis as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      dwayneCurtisInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();

    checkNameInApplicantList(dwayneCurtisInitial);
  });

  it('should add Betty Curtis to application', () => {
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
