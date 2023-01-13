/* eslint-disable @typescript-eslint/naming-convention */
type NoPersonalIdentifier = {
  has_ssn: false;
};

type HasPersonalIdentifier = {
  has_ssn: true;
  encrypted_ssn: string;
};

export type IdentifyingInformation =
  | NoPersonalIdentifier
  | HasPersonalIdentifier;
