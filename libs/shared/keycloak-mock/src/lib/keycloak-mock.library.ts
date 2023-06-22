import { cookiesResponse, IFRAMERESPONSE, loginFrame } from './large-responses';

const URLS = {
  auth: (realm: string) =>
    `**/auth/realms/${realm}/protocol/openid-connect/auth**`,
  cookies: (realm: string) =>
    `**/auth/realms/${realm}/protocol/openid-connect/3p-cookies/step1.html`,
  loginStatusIframe: (realm: string) =>
    `**/auth/realms/${realm}/protocol/openid-connect/login-status-iframe.html**`,
  loginStatusIframeInit: (realm: string) =>
    `**/auth/realms/${realm}/protocol/openid-connect/login-status-iframe.html/init**`,
  logout: (realm: string) =>
    `**/auth/realms/${realm}/protocol/openid-connect/logout**`,
  token: (realm: string) =>
    `**/auth/realms/${realm}/protocol/openid-connect/token`,
};

const METHODS = {
  auth: 'GET',
  cookies: 'GET',
  loginStatusIframe: 'GET',
  loginStatusIframeInit: 'GET',
  logout: 'GET',
  token: 'POST',
};

/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
const RESPONSES = {
  cookies: cookiesResponse,
  loginStatusIframe: IFRAMERESPONSE,
  loginStatusIframeInit: {
    statusCode: 204,
  },
  logout: (redirectUrl: string) => {
    return {
      statusCode: 302,
      headers: { Location: redirectUrl },
    };
  },
  token: (tokenResponse: object) => {
    return {
      statusCode: 200,
      body: tokenResponse,
    };
  },
};

const generateRefreshToken = (realm: string): any => {
  return {
    exp: Math.ceil(Date.now() / 1000) + 1800,
    iat: Math.ceil(Date.now() / 1000),
    jti: 'bbeb4af2-a60e-4ac9-89cf-6e102578c55e',
    iss: `http://localhost:8080/auth/realms/${realm}`,
    aud: `http://localhost:8080/auth/realms/${realm}`,
    sub: 'a622e475-d88a-42cc-aefc-250dc09eb1f2',
    typ: 'Refresh',
    azp: 'openid',
    scope: 'openid profile email',
    sid: 'fd9cd254-49d6-4b0b-8d68-4cebd2428e8d',
  };
};

const jwtHeader = {
  alg: 'HS256',
  typ: 'JWT',
};

export const generateTokenResponse = (
  accessToken: any,
  realm: string,
  session_state: string
) => {
  return {
    access_token:
      btoa(JSON.stringify(jwtHeader)) +
      '.' +
      btoa(JSON.stringify(accessToken)) +
      '.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    refresh_token:
      'abcdefg.' +
      btoa(JSON.stringify(generateRefreshToken(realm))) +
      '.abcdefg',
    expires_in: 300,
    refresh_expires_in: 1800,
    token_type: 'Bearer',
    'not-before-policy': 0,
    session_state: session_state,
    scope: 'openid profile email',
  };
};
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-enable arrow-body-style */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function setMocksForKeycloak(
  tokenResponse: object,
  appRoot: string,
  realm: string,
  cy: Cypress.cy
): void {
  cy.intercept(
    {
      method: METHODS.loginStatusIframe,
      url: URLS.loginStatusIframe(realm),
    },
    (request: any) => {
      request.reply(RESPONSES.loginStatusIframe);
    }
  );
  cy.intercept(
    {
      method: METHODS.loginStatusIframeInit,
      url: URLS.loginStatusIframeInit(realm),
    },
    (request: any) => {
      request.reply(RESPONSES.loginStatusIframeInit);
    }
  );
  const logoutRedirectUrl = <string>(Cypress.config().baseUrl || '' + appRoot);
  cy.intercept(
    {
      method: METHODS.logout,
      url: URLS.logout(realm),
    },
    (request: any) => {
      request.reply(RESPONSES.logout(logoutRedirectUrl));
    }
  );
  cy.intercept(
    {
      method: METHODS.cookies,
      url: URLS.cookies(realm),
    },
    (request: any) => {
      request.reply(RESPONSES.cookies);
    }
  );
  cy.intercept(
    {
      method: METHODS.token,
      url: URLS.token(realm),
    },
    (request: any) => {
      request.reply(RESPONSES.token(tokenResponse));
    }
  );
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  /* eslint-disable @typescript-eslint/no-unsafe-argument */
  cy.intercept(
    {
      method: METHODS.auth,
      url: URLS.auth(realm),
    },
    (request: any) => {
      const { redirect_uri: redirectUri, state } = request.query;
      const sessionState = '5487e3d9-887a-4a8d-83d6-57e5b89c0230';
      const code =
        '05f2b594-8a79-4209-8f3c-a3c402a8760d.5487e3d9-887a-4a8d-83d6-57e5b89c0230.f31c0fd9-8b08-4165-abec-90a1ac395d58';
      request.reply(loginFrame(redirectUri, state, code, sessionState));
    }
  );
  cy.intercept(
    {
      method: 'GET',
      url: '**/keycloak-mock/submit-auth**',
    },
    (request: any) => {
      const { redirectUri, state, sessionState, code } = request.query;
      /* eslint-disable @typescript-eslint/restrict-template-expressions */
      request.redirect(
        `${redirectUri}#session_state=${sessionState}&code=${code}&state=${state}`
      );
      /* eslint-enable @typescript-eslint/restrict-template-expressions */
    }
  );
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  /* eslint-enable @typescript-eslint/no-unsafe-argument */
}

export function clickKeycloakLogin(cy: Cypress.cy): void {
  cy.get('#keycloak-mock-login-form').submit();
}
/* eslint-enable @typescript-eslint/no-unsafe-call */
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
