import { SlcspResidence } from '@enroll/slcsp-calculator/data-access';
import { fillInResidenceMonths } from './residence-months';

export const fillInResidences = (residences: SlcspResidence[]) => {
  for (const [index, residence] of residences.entries()) {
    const { county, months, absent } = residence;

    if (absent) {
      cy.get(`[data-cy="${index}-absent"]`).click();
    } else {
      const { zipcode, name: countyName, state } = county;
      cy.intercept(`**/counties/**/${zipcode}**`, {
        fixture: `${zipcode}.json`,
      }).as('zipcodeSearch');
      cy.get(`[data-cy="zipcode-input-${index}"]`).type(zipcode);
      cy.wait('@zipcodeSearch');

      cy.get('[data-cy="select-county"]').click();
      cy.get(`[data-cy="zipcode-input-${index}"]`).should(
        'have.value',
        `${zipcode}, ${countyName}, ${state}`
      );
    }

    fillInResidenceMonths(index, months);

    // If this is not the last residence, add another residence
    if (index < residences.length - 1) {
      cy.get('[data-cy="navigate-to-member-coverage"]').should('be.disabled');
      cy.get('[data-cy="add-residence"]').click();
    }
  }
};
