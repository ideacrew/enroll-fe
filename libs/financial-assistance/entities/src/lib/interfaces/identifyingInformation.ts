/* eslint-disable @typescript-eslint/naming-convention */
interface NoPersonalIdentifer {
  has_ssn: false;
}

interface HasPersonalIdentifier {
  has_ssn: true;
  encrypted_ssn: string;
}

export type IdentifyingInformation =
  | NoPersonalIdentifer
  | HasPersonalIdentifier;
