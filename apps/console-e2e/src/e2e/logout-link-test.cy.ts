/* eslint-disable @typescript-eslint/naming-convention */

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

describe('console - after having logged in', () => {
  beforeEach(() => {
    cy.visit('/');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    cy.login(email, 'SomePassword', tokenResponse);
  });

  it('should have a clickable logout link', () => {
    cy.get('a').contains('logout').click();
    cy.get('button').should('contain', 'Sign In');
  });
});
