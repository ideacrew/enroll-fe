import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/household-form';

describe('slcsp-calculator', () => {
  const householdMember1: HouseholdMember = {
    primaryMember: true,
    relationship: 'self',
    name: 'John',
    dob: {
      month: '1',
      day: '1',
      year: '1979',
    },
    residences: [
      {
        county: {
          zipcode: '04003',
          name: 'Cumberland',
          fips: '23005',
          state: 'ME',
        },
        months: {
          jan: true,
          feb: true,
          mar: true,
          apr: true,
          may: true,
          jun: true,
          jul: true,
          aug: true,
          sep: true,
          oct: true,
          nov: true,
          dec: true,
        },
      },
    ],
    coverage: {
      jan: false,
      feb: false,
      mar: false,
      apr: false,
      may: false,
      jun: false,
      jul: false,
      aug: false,
      sep: false,
      oct: false,
      nov: false,
      dec: false,
    },
  };
  const householdMembers: HouseholdMember[] = [householdMember1];

  const finalFormValue: HouseholdFormValue = {
    householdCount: 1,
    householdConfirmation: true,
    taxYear: '2022',
    state: 'ME',
    members: householdMembers,
  };

  beforeEach(() => {
    cy.visit('/');

    // Start the form
    cy.get('[data-cy="start-link"]').click();
    cy.get('[data-cy="start-tax-year"]').click();
    cy.get('[data-cy="continue-to-household"]').click();
  });

  it('should fill out the form for 1 person with no change in residence', () => {
    ////////////////////
    // Household Page //
    ////////////////////

    // Initial household page state
    cy.get('[data-cy="navigate-to-member-details"]').should('be.disabled');

    // Should start with one person in household
    // Text input should have a value of 1
    cy.get('[data-cy="household-count"]').should('have.value', '1');

    // Household confirmation radio group should be unselected
    cy.get('[data-cy="household-confirmation-yes"]').should('not.be.checked');
    cy.get('[data-cy="household-confirmation-no"]').should('not.be.checked');
    cy.get('[data-cy="household-members-list"]').should('not.exist');

    // Click yes to confirm household members meet criteria,
    // should display household members list
    cy.get('[data-cy="household-confirmation-yes"]').click();
    cy.get('[data-cy="household-members-list"]').should('exist');

    // Fill in first name of primary person
    cy.get('[data-cy="member-0"]').type(householdMember1.name);
    cy.get('[data-cy="navigate-to-member-details"]').click();

    ////////////////////////
    // Member Detail Page //
    ////////////////////////

    // Initial Member details page state
    cy.get('[data-cy="member-heading"]').contains(
      `Tell us about ${householdMember1.name}`
    );
    cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');

    // DOB Form
    cy.get('[data-cy="month-input"]').type(householdMember1.dob.month);
    cy.get('[data-cy="day-input"]').type(householdMember1.dob.day);
    cy.get('[data-cy="year-input"]').type(householdMember1.dob.year);

    // Zip code search, after this is typed in an api call should be made
    cy.intercept('**/counties/**/04003**', { fixture: 'zipcode.json' }).as(
      'zipcodeSearch'
    );
    cy.get('[data-cy="zipcode-input-0"]').type(
      householdMember1.residences[0].county.zipcode
    );
    cy.wait('@zipcodeSearch');

    cy.get('[data-cy="select-county"]').click();
    cy.get('[data-cy="zipcode-input-0"]').should(
      'have.value',
      '04003, Cumberland County, ME'
    );

    // Select all months
    cy.get('[data-cy="23005-select-all-months"]').click();
    cy.get('[data-cy="navigate-to-member-coverage"]').click();

    //////////////////////////
    // Member Coverage Page //
    //////////////////////////

    // Initial Member coverage page state
    cy.get('h1').contains(`${householdMember1.name}: Marketplace Coverage`);

    // Valid coverage includes any combination of selected checkboxes
    // Including all or none
    cy.get('[data-cy="navigate-to-next-step"]').should('not.be.disabled');

    // Don't set any coverage months in this test
    cy.get('[data-cy="navigate-to-next-step"]').click();

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
