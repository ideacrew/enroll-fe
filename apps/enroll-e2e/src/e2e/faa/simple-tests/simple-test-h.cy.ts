/* eslint-disable @typescript-eslint/naming-convention */
import {
  addApplicant,
  checkNameInApplicantList,
  editApplicationButton,
  applicationsStub,
  bettyHurtisInitial,
  dwayneHurtisInitial,
} from '@enroll/financial-assistance/testing';

xdescribe('CMS Simple Test Case H', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
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
