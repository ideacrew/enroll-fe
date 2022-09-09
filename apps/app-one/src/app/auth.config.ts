import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://preprod-sso.cme.openhbx.org/auth/realms/sbm',
  redirectUri: window.location.origin + '/',
  clientId: 'app-one',
  responseType: 'code',
  scope: 'openid profile email offline_access roles',
  showDebugInformation: true,
  timeoutFactor: 0.01,
};
