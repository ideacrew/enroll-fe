/* eslint-disable @typescript-eslint/consistent-type-definitions */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { TokenResponse } from '@enroll/console/auth';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string, tResponse: TokenResponse): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add(
  'login',
  (email: string, password: string, tResponse: TokenResponse) => {
    cy.intercept({ method: 'POST', url: '**/sessions' }, tResponse);
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[name="username"]').type(email).blur();
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[name="password"]').type(password).blur();
    cy.get('button').contains('Sign In').click();
  }
);
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
