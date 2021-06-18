/* eslint-disable @typescript-eslint/naming-convention */
import {
  addApplicant,
  checkNameInApplicantList,
  editApplicationButton,
  applicationsStub,
  claytonMorganInitial,
  albaMorganInitial,
  ayvaMorganInitial,
  safiyahMorganInitial,
  daphneMorganInitial,
  hareemMorganInitial,
  theodoreMorganInitial,
  michaelMorganInitial,
  hughMorganInitial,
} from '@enroll/financial-assistance/testing';

describe('CMS Simple Test Case H', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
  });

  it('should display Betty Hurtis as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();

    checkNameInApplicantList(claytonMorganInitial);
  });

  it('should add Alba Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
    ]);

    addApplicant(albaMorganInitial);

    checkNameInApplicantList(albaMorganInitial);
  });

  it('should add Ayva Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    // Override GET with added applicant
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
    ]);

    addApplicant(ayvaMorganInitial);
    checkNameInApplicantList(ayvaMorganInitial);
  });

  it('should add Safiyah Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
    ]);

    addApplicant(safiyahMorganInitial);
    checkNameInApplicantList(safiyahMorganInitial);
  });

  it('should add Daphne Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
    ]);

    addApplicant(daphneMorganInitial);
    checkNameInApplicantList(daphneMorganInitial);
  });

  it('should add Hareem Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
    ]);

    addApplicant(hareemMorganInitial);
    checkNameInApplicantList(hareemMorganInitial);
  });

  it('should add Theodore Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
      theodoreMorganInitial,
    ]);

    addApplicant(theodoreMorganInitial);
    checkNameInApplicantList(theodoreMorganInitial);
  });
  it('should add Michael Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
      theodoreMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
      theodoreMorganInitial,
      michaelMorganInitial,
    ]);

    addApplicant(michaelMorganInitial);
    checkNameInApplicantList(michaelMorganInitial);
  });

  it('should add Hugh Morgan to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
      theodoreMorganInitial,
      michaelMorganInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      claytonMorganInitial,
      albaMorganInitial,
      ayvaMorganInitial,
      safiyahMorganInitial,
      daphneMorganInitial,
      hareemMorganInitial,
      theodoreMorganInitial,
      michaelMorganInitial,
      hughMorganInitial,
    ]);

    addApplicant(hughMorganInitial);
    checkNameInApplicantList(hughMorganInitial);
  });
});
