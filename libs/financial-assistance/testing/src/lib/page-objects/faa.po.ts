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
export const livesWithPrimaryLabel = () =>
  cy.get('[data-cy="lives-with-primary-label"]');
export const livesWithPrimaryNoLabel = () =>
  cy.get('[data-cy="lives-with-primary-no"]');
export const addMemberToHouseholdButton = () =>
  cy.get('[data-cy="add-member-to-household"]');

export const editApplicationButton = () =>
  cy.get('[data-cy="edit-application"]');
const addNewHouseholdMemberButton = () =>
  cy.get('[data-cy="add-new-household-member"]');

export const genderLabel = (gender: GenderKind) =>
  cy.get(`[data-cy="gender-${gender}-label"]`);

export const needsCoverageLabel = (needsCoverage: boolean) =>
  cy.get(`[data-cy="needs-coverage-${needsCoverage ? 'yes' : 'no'}"]`);

const enterSSN = (applicant: Applicant): void => {
  if (applicant.encrypted_ssn) {
    ssnInput().type('123-45-6789');
  } else {
    cy.get('[data-cy="has-no-ssn-label"]').click();
  }
};

export const editApplicantButton = (applicant: Applicant) => {
  cy.get(`[data-cy="edit-applicant-${applicant.id}"]`).click();
};

const enterCoverageInformation = (applicant: Applicant) => {
  needsCoverageLabel(applicant.is_applying_coverage).click();
  provideAdditionalInformation().click();
};

export const enterBasicInformation = (applicant: Applicant): void => {
  const { first_name, last_name, dob, gender, relationship } = applicant;
  firstNameInput().type(first_name);
  lastNameInput().type(last_name);
  dobInput().type(dob);
  enterSSN(applicant);
  genderLabel(gender).click();
  relationshipSelect().select(relationship);
  provideAdditionalInformation().click();
  livesWithPrimaryLabel().click(); // true for all simple test cases
};

export const enterAdditionalInformation = (
  applicant: NeedsCoverageApplicant
) => {
  // for simple tests, this is true
  provideAdditionalInformation().click();
  processCitizenshipInfo(applicant);
  processTribalInfo(applicant);
  processIncarcerationInfo(applicant);
};

const processCitizenshipInfo = (applicant: NeedsCoverageApplicant) => {
  citizenshipStatusLabel(applicant.citizen_status).click();
  provideAdditionalInformation().click();

  if (applicant.citizen_status !== 'us_citizen') {
    naturalizedStatusLabel(applicant.citizen_status).click();
    provideAdditionalInformation().click();
  }
};

const processTribalInfo = (applicant: Applicant) => {
  tribalStatusLabel(applicant.indian_tribe_member).click();
  provideAdditionalInformation().click();

  // if (applicant.indian_tribe_member) {
  //   // add tribal info
  //   provideAdditionalInformation().click();
  // }
};

const processIncarcerationInfo = (applicant: NeedsCoverageApplicant) => {
  incarceratedLabel(applicant.is_incarcerated).click();
  provideAdditionalInformation().click();
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

export const incarceratedLabel = (incarcerationStatus: boolean) => {
  const isIncarcerated = incarcerationStatus ? 'yes' : 'no';

  return cy.get(`[data-cy="incarcerated-label-${isIncarcerated}"]`);
};

export const provideEthnicityInformation = () =>
  cy.get('[data-cy="provide-ethnicity-information"]');

export const addApplicant = (applicant: NeedsCoverageApplicant) => {
  editApplicationButton().click();
  addNewHouseholdMemberButton().click();
  enterCoverageInformation(applicant);
  enterBasicInformation(applicant);
  enterAdditionalInformation(applicant);
  addMemberToHouseholdButton().click();
};

export const addNonApplicant = (applicant: NoCoverageApplicant) => {
  editApplicationButton().click();
  addNewHouseholdMemberButton().click();
  enterCoverageInformation(applicant);
  enterBasicInformation(applicant);
  addMemberToHouseholdButton().click();
};

export const checkNameInApplicantList = (applicant: Applicant) =>
  cy
    .get(`[data-cy="applicant-${applicant.id}-name"]`)
    .contains(`${applicant.first_name} ${applicant.last_name}`);
