import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://appsso.login.sausvdc02.pcf.dell.com/oauth/token',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '2fc30db4-881c-4c48-a5e3-d920e45c002c',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid',

  requestAccessToken: true,

  responseType: 'token+id_token',

  disableAtHashCheck: true,

}
