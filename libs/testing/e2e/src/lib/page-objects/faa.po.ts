/* eslint-disable @typescript-eslint/naming-convention */
import { CitizenKind, GenderKind } from '@enroll/financial-assistance/entities';
import {
  Applicant,
  NeedsCoverageApplicant,
  NoCoverageApplicant,
} from '@enroll/financial-assistance/data-access';

export const firstNameInput = () => cy.get('[data-cy="first-name-input"]');
export const lastNameInput = () => cy.get('[data-cy="last-name-input"]');
export const dobInput = () => cy.get('[data-cy="date-of-birth-input"]');
export const ssnInput = () => cy.get('[data-cy="ssn-input"]');
export const relationshipSelect = () =>
  cy.get('[data-cy="relationship-select"]');
export const livesWithPrimaryYesLabel = () =>
  cy.get('[data-cy="lives-with-primary-yes"]');
export const livesWithPrimaryNoLabel = () =>
  cy.get('[data-cy="lives-with-primary-no"]');
export const addMemberToHouseholdButton = () =>
  cy.get('[data-cy="add-member-to-household"]');

export const genderLabel = (gender: GenderKind) =>
  cy.get(`[data-cy="gender-${gender}-label"]`);

export const needsCoverageLabel = (needsCoverage: boolean) =>
  cy.get(`[data-cy="needs-coverage-${needsCoverage ? 'yes' : 'no'}"]`);

export const enterBasicInformation = (applicant: Applicant): void => {
  const { first_name, last_name, dob, gender, relationship } = applicant;
  firstNameInput().type(first_name);
  lastNameInput().type(last_name);
  dobInput().type(dob);
  ssnInput().type('123-45-6789');
  genderLabel(gender).click();
  relationshipSelect().select(relationship);
  livesWithPrimaryYesLabel().click(); // true for all simple test cases
  needsCoverageLabel(applicant.is_applying_coverage).click();
};

export const enterAdditionalInformation = (
  applicant: NeedsCoverageApplicant
) => {
  // for simple tests, this is true
  provideAdditionalInformation().click();
  citizenshipStatusLabel(applicant.citizen_status).click();
  naturalizedStatusLabel(applicant.citizen_status).click();
  provideTribalInformation().click();
  tribalStatusLabel(applicant.indian_tribe_member).click();
  provideIncarcerationStatus().click();
  incarceratedLabel(applicant.is_incarcerated).click();
  provideEthnicityInformation().click();
};

export const provideAdditionalInformation = () =>
  cy.get('[data-cy="provide-additional-information"]');

export const citizenshipStatusLabel = (citizenship: CitizenKind) => {
  const isCitizen =
    citizenship === 'us_citizen' || citizenship === 'naturalized_citizen'
      ? 'yes'
      : 'no';

  return cy.get(`[data-cy="citizenship-label-${isCitizen}"]`);
};

export const naturalizedStatusLabel = (citizenship: CitizenKind) => {
  const isNaturalized = citizenship === 'us_citizen' ? 'no' : 'yes';

  return cy.get(`[data-cy="naturalized-label-${isNaturalized}"]`);
};

export const tribalStatusLabel = (tribalStatus: boolean) => {
  const isTribal = tribalStatus ? 'yes' : 'no';

  return cy.get(`[data-cy="tribal-label-${isTribal}"]`);
};

export const provideTribalInformation = () =>
  cy.get('[data-cy="provide-tribal-information"]');
export const provideIncarcerationStatus = () =>
  cy.get('[data-cy="provide-incarceration-status"]');

export const incarceratedLabel = (incarcerationStatus: boolean) => {
  const isIncarcerated = incarcerationStatus ? 'yes' : 'no';

  return cy.get(`[data-cy="incarcerated-label-${isIncarcerated}"]`);
};

export const provideEthnicityInformation = () =>
  cy.get('[data-cy="provide-ethnicity-information"]');

export const addApplicant = (applicant: NeedsCoverageApplicant) => {
  enterBasicInformation(applicant);
  enterAdditionalInformation(applicant);
};

export const addNonApplicant = (applicant: NoCoverageApplicant) => {
  enterBasicInformation(applicant);
};
