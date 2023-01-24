/* eslint-disable @typescript-eslint/naming-convention */

import {
  checkNameInApplicantList,
  editApplicationButton,
  applicationsStub,
  geraldRiversInitial,
} from '@enroll/financial-assistance/testing';

xdescribe('CMS Simple Test Case D', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applicationsStub);
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
