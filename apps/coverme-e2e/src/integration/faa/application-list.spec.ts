/* eslint-disable @typescript-eslint/naming-convention */
const applications = [
  {
    id: '269000183',
    status: 'draft',
    startedOn: '2021-05-27T00:00:00.000Z',
  },
];

describe('Financial Assistance Application', () => {
  beforeEach(() => {
    cy.intercept({ method: 'GET', url: '/applications' }, applications);

    cy.visit('/financial-assistance');
  });

  it('should display a list of applications', () => {
    cy.get('h1').contains('Cost Savings Applications');
    cy.get('.application-id').contains(applications[0].id);
  });
});
