import { EthnicityKind } from './ethnicity';
import { GenderKind } from './gender';

export type Demographic = {
  gender: GenderKind;
  dob: string;
  ethnicity: EthnicityKind[];
};
