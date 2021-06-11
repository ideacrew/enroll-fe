/* eslint-disable @typescript-eslint/naming-convention */
import {
  applications,
  initialApplicantsSimpleA,
  updatedApplicantsSimpleA,
} from '@enroll/testing/stubs/financial-assistance';

describe('CMS Test Case A', () => {
  beforeEach(() => {
    // const now = new Date(2011, 5, 11);
    // cy.clock(now);
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
    cy.intercept(
      { method: 'GET', url: '/applications/**/applicants' },
      initialApplicantsSimpleA
    );
    cy.visit('/financial-assistance');
  });

  it('add Betty Curtis to application', () => {
    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    // Name, DOB, SSN, Gender, Relationship
    cy.get('[data-cy="first-name-input"]').type('Betty');
    cy.get('[data-cy="last-name-input"]').type('Curtis');
    cy.get('[data-cy="date-of-birth-input"]').type('1961-01-01');
    cy.get('[data-cy="ssn-input"]').type('123-45-6789');
    cy.get('[data-cy="gender-female-label"]').click();
    cy.get('[data-cy="relationship-select"]').select('Spouse');

    // Residence
    cy.get('[data-cy="lives-with-primary-yes"]').click();

    // Coverage
    cy.get('[data-cy="needs-coverage-no"]').click();

    // Override initial applicants with new payload
    cy.intercept(
      { method: 'GET', url: '/applications/**/applicants' },
      updatedApplicantsSimpleA
    );

    // No coverage needed, so link should add member and
    // return to list of applicants
    cy.get('[data-cy="add-member-to-household"]').click();
  });
});
