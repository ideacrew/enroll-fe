/* eslint-disable @typescript-eslint/naming-convention */
import {
  aishaModellInitial,
  applications,
} from '@enroll/testing/stubs/financial-assistance';

describe('CMS Test Case C', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
  });

  it('displays Aisha Modell in the existing application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      aishaModellInitial,
    ]);
    cy.visit('/financial-assistance');
    cy.get('[data-cy="edit-application"]').click();
    cy.get(`[data-cy="applicant-${aishaModellInitial.id}-name"]`).contains(
      `${aishaModellInitial.first_name} ${aishaModellInitial.last_name}`
    );
  });
});
