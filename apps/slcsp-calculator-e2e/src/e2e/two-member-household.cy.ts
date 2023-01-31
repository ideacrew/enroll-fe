import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';
import {
  householdMember1,
  householdMember2,
  createFinalFormValue,
} from '@enroll/slcsp-calculator/mocks';
import {
  fillInHouseholdForm,
  initialNavigation,
} from '@enroll/slcsp-calculator/testing';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/types';

describe('slcsp-calculator', () => {
  const householdMembers: HouseholdMember[] = [
    householdMember1,
    householdMember2,
  ];

  const finalFormValue: HouseholdFormValue =
    createFinalFormValue(householdMembers);

  beforeEach(() => {
    initialNavigation();
  });

  it('should fill out the form for 2 persons with no change in residence', () => {
    fillInHouseholdForm(householdMembers);

    /////////////////
    // Review page //
    /////////////////

    // Initial state
    cy.get('h1').contains('Review Your Information');

    cy.intercept('**/slcsp_calculator/estimate', {
      fixture: 'simple-results.json',
    }).as('slcsp-estimate');
    cy.get('[data-cy="continue-to-results"]').click();

    //////////////////
    // Results page //
    //////////////////

    cy.wait('@slcsp-estimate')
      .its('request.body')
      .should('deep.equal', finalFormValue);

    cy.get('h1').contains('Your Results');
  });
});
