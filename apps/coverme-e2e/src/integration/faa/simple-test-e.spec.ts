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
  addMemberToHouseholdButton,
  addApplicant,
  addNonApplicant,
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
    cy.get('[data-cy="edit-application"]').click();
    cy.get(`[data-cy="applicant-${lailaSimonInitial.id}-name"]`).contains(
      `${lailaSimonInitial.first_name} ${lailaSimonInitial.last_name}`
    );
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

    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    addNonApplicant(williamSimonInitial);

    // Override initial applicants with new payload

    // No coverage needed, so link should add member and
    // return to list of applicants
    cy.get(`[data-cy="applicant-${williamSimonInitial.id}-name"]`).contains(
      'William Simon'
    );
  });

  it('add Finley Simon to application', () => {
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
    ]);
    cy.visit('/financial-assistance');

    // Override GET with added applicant
    cy.intercept({ method: 'GET', url: '/applications/**/applicants' }, [
      lailaSimonInitial,
      williamSimonInitial,
      finleySimonInitial,
    ]);

    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    addApplicant(finleySimonInitial);

    // No coverage needed, so link should add member and
    // return to list of applicants
    cy.get(`[data-cy="applicant-${finleySimonInitial.id}-name"]`).contains(
      `${finleySimonInitial.first_name} ${finleySimonInitial.last_name}`
    );
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

    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    // Name, DOB, SSN, Gender, Relationship
    addApplicant(princetonSimonInitial);

    // Override initial applicants with new payload

    // No coverage needed, so link should add member and
    // return to list of applicants
    cy.get(`[data-cy="applicant-${princetonSimonInitial.id}-name"]`).contains(
      `${princetonSimonInitial.first_name} ${princetonSimonInitial.last_name}`
    );
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

    cy.get('[data-cy="edit-application"]').click();
    cy.get('[data-cy="add-new-household-member"]').click();

    addApplicant(alexzanderSimonInitial);

    cy.get(`[data-cy="applicant-${alexzanderSimonInitial.id}-name"]`).contains(
      `${alexzanderSimonInitial.first_name} ${alexzanderSimonInitial.last_name}`
    );
  });
});
