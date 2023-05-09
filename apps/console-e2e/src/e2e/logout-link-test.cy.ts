/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { JwtPayload, TokenResponse } from '@enroll/console/auth';

const userName = 'a.very.long.email.name@some.very.long.domain.com';

const email = 'email@domain.com';

const jwtHeader = {
  alg: 'HS256',
  typ: 'JWT',
};

const token: JwtPayload = {
  exp: Date.now() / 1000 + 1000,
  iat: Date.now() / 1000 + 1000,
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

const tokenResponse: TokenResponse = {
  token:
    btoa(JSON.stringify(jwtHeader)) +
    '.' +
    btoa(JSON.stringify(token)) +
    '.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  refresh_token: '',
};

const lastUpdatedData = {
  last_update_at: 'SOME UPDATE DATE',
};

// I'm disabling all of this until we figure out how to fully mock keycloak,
// or set up a docker implementation to run the cypress commands.

// describe('console - after having logged in', () => {
//   beforeEach(() => {
//     cy.visit('/');
//     cy.intercept(
//       {
//         method: 'GET',
//         url: '**/transaction_management/portal_data/last_update',
//       },
//       lastUpdatedData
//     );
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     cy.login(email, 'SomePassword', tokenResponse);
//   });

//   it('should have a clickable logout link', () => {
//     cy.get('a').contains('logout').click();
//     cy.get('button').should('contain', 'Sign In');
//   });

//   it('should have the last updated date', () => {
//     cy.contains('Data current as of: SOME UPDATE DATE');
//   });
// });
