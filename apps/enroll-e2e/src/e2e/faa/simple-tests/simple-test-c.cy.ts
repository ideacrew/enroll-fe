/* eslint-disable @typescript-eslint/naming-convention */

import {
  checkNameInApplicantList,
  editApplicationButton,
  aishaModellInitial,
  applicationsStub,
} from '@enroll/financial-assistance/testing';

xdescribe('CMS Simple Test Case C', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
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
