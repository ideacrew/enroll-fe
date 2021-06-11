/* eslint-disable @typescript-eslint/naming-convention */
const applications = [
  {
    id: '269000183',
    status: 'draft',
    startedOn: '2021-05-27T00:00:00.000Z',
  },
];

const applicants = [
  {
    applicantId: 'abc1234',
    fullName: 'Ted Crisp',
    birthDate: 'Jan 1, 1970',
    gender: 'male',
    relationship: 'self',
    status: 'info needed',
  },
];

describe('Financial Assistance Application', () => {
  beforeEach(() => {
    cy.intercept({ method: 'GET', url: '/applications' }, applications);
    cy.intercept(
      { method: 'GET', url: '/applications/**/applicants' },
      applicants
    );
    cy.visit('/financial-assistance');
  });

  it('should display a list of applications', () => {
    cy.get('h1').contains('Cost Savings Applications');
    cy.get('.application-id').contains(applications[0].id);
  });

  it('should start editing an existing application', () => {
    cy.get('h1').contains('Cost Savings Applications');
    cy.get('[data-cy="edit-application"]').click();
    cy.get('h1').contains('Family Information');
    cy.get('[data-cy="edit-applicant-0"]').click();
    cy.get('h1').contains('Will this person file taxes for 2021?');
  });
});
