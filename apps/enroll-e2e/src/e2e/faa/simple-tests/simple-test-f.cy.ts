/* eslint-disable @typescript-eslint/naming-convention */
import {
  addApplicant,
  checkNameInApplicantList,
  editApplicationButton,
  applicationsStub,
  christianSharpInitial,
  miaSharpInitial,
  monikaSharpInitial,
  sorenSharpInitial,
} from '@enroll/financial-assistance/testing';

describe('CMS Simple Test Case F', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
  });

  it('should display Soren Sharp as the existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
    ]);
    cy.visit('/financial-assistance');
    editApplicationButton().click();

    checkNameInApplicantList(sorenSharpInitial);
  });

  it('should add Mia Sharp to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
      miaSharpInitial,
    ]);

    addApplicant(miaSharpInitial);

    checkNameInApplicantList(miaSharpInitial);
  });

  it('should add Christian Sharp to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
      miaSharpInitial,
    ]);
    cy.visit('/financial-assistance');

    // Override GET with added applicant
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
      miaSharpInitial,
      christianSharpInitial,
    ]);

    addApplicant(christianSharpInitial);
    checkNameInApplicantList(christianSharpInitial);
  });

  it('should add Monika Sharp to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
      miaSharpInitial,
      christianSharpInitial,
    ]);
    cy.visit('/financial-assistance');

    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      sorenSharpInitial,
      miaSharpInitial,
      christianSharpInitial,
      monikaSharpInitial,
    ]);

    addApplicant(monikaSharpInitial);
    checkNameInApplicantList(monikaSharpInitial);
  });
});
