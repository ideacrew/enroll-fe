/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  michaelEwingInitial,
} from '@enroll/testing/stubs/financial-assistance';

describe('CMS Test Case B', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('should display Michael Ewing as existing applicant', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      michaelEwingInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.get('[data-cy="edit-application"]').click();
    cy.get(`[data-cy="applicant-${michaelEwingInitial.id}-name"]`).contains(
      `${michaelEwingInitial.first_name} ${michaelEwingInitial.last_name}`
    );
  });
});
