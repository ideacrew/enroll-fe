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
  const householdMember2: HouseholdMember = {
    primaryMember: false,
    relationship: 'spouse',
    name: 'Suzy',
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
  const householdMembers: HouseholdMember[] = [
    householdMember1,
    householdMember2,
  ];

  const finalFormValue: HouseholdFormValue = {
    householdCount: householdMembers.length,
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

  it('should fill out the form for 2 persons with no change in residence', () => {
    ////////////////////
    // Household Page //
    ////////////////////
    const householdCount = 2;

    // Initial household page state
    cy.get('[data-cy="navigate-to-member-details"]').should('be.disabled');

    // Should start with one person in household
    // Text input should initially have a value of one,
    // This type() command selects the text and replaces it with 2
    cy.get('[data-cy="household-count"]').type(`{selectAll}${householdCount}`);
    cy.get('[data-cy="household-confirmation-yes"]').click();

    // Household list should have two members
    cy.get('enroll-household-member-name').should(
      'have.length',
      householdCount
    );

    // Fill in names of household members
    cy.get('[data-cy="member-0"]').type(householdMember1.name);
    cy.get('[data-cy="member-1"]').type(householdMember2.name);

    // Select relationship between primary and secondary member
    cy.get('[data-cy="relationship-1"]')
      .select('Spouse')
      .should('have.value', 'spouse');

    cy.get('[data-cy="navigate-to-member-details"]').click();

    //////////////////////////
    // Member 1 Detail Page //
    //////////////////////////

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

    ////////////////////////////
    // Member 1 Coverage Page //
    ////////////////////////////

    // Initial Member coverage page state
    cy.get('h1').contains(`${householdMember1.name}: Marketplace Coverage`);

    // Valid coverage includes any combination of selected checkboxes
    // Including all or none
    cy.get('[data-cy="navigate-to-next-step"]').should('not.be.disabled');

    // Don't set any coverage months in this test
    cy.get('[data-cy="navigate-to-next-step"]').click();

    //////////////////////////
    // Member 2 Detail Page //
    //////////////////////////

    // Initial Member details page state
    cy.get('[data-cy="member-heading"]').contains(
      `Tell us about ${householdMember2.name}`
    );
    cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');

    // DOB Form
    cy.get('[data-cy="month-input"]').type(householdMember2.dob.month);
    cy.get('[data-cy="day-input"]').type(householdMember2.dob.day);
    cy.get('[data-cy="year-input"]').type(householdMember2.dob.year);

    // Secondary members are not required to enter residence information
    cy.get('[data-cy="zipcode-input-0"]').should('not.exist');

    cy.get('[data-cy="navigate-to-member-coverage"]').click();

    ////////////////////////////
    // Member 2 Coverage Page //
    ////////////////////////////

    // Initial Member coverage page state
    cy.get('h1').contains(`${householdMember2.name}: Marketplace Coverage`);

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
