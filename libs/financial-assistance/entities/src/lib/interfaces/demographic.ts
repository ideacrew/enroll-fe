import { EthnicityKind } from './ethnicity';
import { GenderKind } from './gender';

export interface Demographic {
  gender: GenderKind;
  dob: string;
  ethnicity: EthnicityKind[];
}
