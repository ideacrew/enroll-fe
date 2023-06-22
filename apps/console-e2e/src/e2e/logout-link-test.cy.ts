import {
  setMocksForKeycloak,
  generateTokenResponse,
  clickKeycloakLogin,
} from '@enroll/shared/keycloak-mock';

/* eslint-disable @typescript-eslint/naming-convention */
const userName = 'a.very.long.email.name@some.very.long.domain.com';

const email = 'email@domain.com';

/* eslint-disable arrow-body-style */
const generateToken = () => {
  return {
    exp: Math.ceil(Date.now() / 1000) + 600,
    iat: Math.ceil(Date.now() / 1000),
    jti: 'abcde',
    iss: 'someone',
    aud: 'somebody',
    sub: 'somebody',
    typ: 'grant',
    azp: 'unused',
    name: 'empty',
    preferred_username: userName,
    email: email,
  };
};
/* eslint-enable arrow-body-style */

describe('console - after having logged in', () => {
  beforeEach(() => {
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const tokenResponse = generateTokenResponse(
      generateToken(),
      'Anthem',
      'abcde'
    );
    setMocksForKeycloak(tokenResponse, '/carrier-portal', 'Anthem', cy);
    /* eslint-enable @typescript-eslint/no-unsafe-call */
  });

  it('should have a clickable logout link', () => {
    cy.visit('/');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    clickKeycloakLogin(cy);
    cy.get('a').contains('logout').click();
    cy.get('#keycloak-mock-login-form').should('exist');
  });

  it('should have the last updated date', () => {
    cy.intercept(
      {
        url: '**/transaction_management/portal_data/last_update',
        method: 'GET',
      },
      { last_update_at: 'SOME UPDATE DATE' }
    );
    cy.visit('/');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    clickKeycloakLogin(cy);
    cy.contains('Data current as of: SOME UPDATE DATE');
  });
});
