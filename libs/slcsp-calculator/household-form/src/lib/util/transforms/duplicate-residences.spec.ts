import {
  householdMember1,
  householdMember2,
} from '@enroll/slcsp-calculator/mocks';

import { duplicateResidencesAcrossSecondaryMembers } from './duplicate-residences';

describe('duplicateResidences', () => {
  it('should return an empty array if no residences are passed in', () => {
    const result = duplicateResidencesAcrossSecondaryMembers([]);
    expect(result).toHaveLength(0);
  });

  it('should return the primary member if only a primary member is passed in', () => {
    const result = duplicateResidencesAcrossSecondaryMembers([
      householdMember1,
    ]);
    expect(result).toHaveLength(1);
  });

  it('should return the primary member and duplicate the primary member residences to all other members', () => {
    const result = duplicateResidencesAcrossSecondaryMembers([
      householdMember1,
      householdMember2,
    ]);
    expect(result).toHaveLength(2);

    const [primaryMember, secondaryMember] = result;

    const primaryMemberResidences = primaryMember.residences;
    const secondaryMemberResidences = secondaryMember.residences;

    expect(primaryMemberResidences.length).toEqual(
      secondaryMemberResidences.length
    );

    const [residence1Primary] = primaryMemberResidences;
    const [residence1Secondary] = secondaryMemberResidences;

    expect(residence1Primary).toEqual(residence1Secondary);
  });
});
