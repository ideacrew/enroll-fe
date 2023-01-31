import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

export const duplicateResidencesAcrossSecondaryMembers = (
  members: HouseholdMember[]
): HouseholdMember[] => {
  const [primaryMember, ...secondaryMembers] = members;

  if (primaryMember === undefined) {
    return [] as HouseholdMember[];
  }

  const primaryMemberResidence = primaryMember.residences;

  const newSecondaryMembers: HouseholdMember[] = secondaryMembers.map(
    (member): HouseholdMember => ({
      ...member,
      residences: primaryMemberResidence,
    })
  );

  return [primaryMember, ...newSecondaryMembers];
};
