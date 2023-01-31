import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

import { fillInHouseholdPage } from './household-page';
import { fillInMemberCoveragePage } from './member-coverage-page';
import { fillInMemberDetailPage } from './member-detail-page';

export const fillInHouseholdForm = (householdMembers: HouseholdMember[]) => {
  fillInHouseholdPage(householdMembers);

  for (const member of householdMembers) {
    fillInMemberDetailPage(member);
    fillInMemberCoveragePage(member);
  }
};
