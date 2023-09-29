import { Pipe, PipeTransform } from '@angular/core';

import { Policy } from '@enroll/carrier-portal/types';

@Pipe({
  name: 'sortByPolicyStart',
  standalone: true,
})
export class SortByPolicyStartPipe implements PipeTransform {
  transform(policies: Policy[]): Policy[] {
    const rawPolicies = [...policies];

    const sortedPolicies = rawPolicies.sort((a, b) => {
      // Sort by plan year in descending order
      const aPlanYear = new Date(a.plan.coverage_year).getFullYear();
      const bPlanYear = new Date(b.plan.coverage_year).getFullYear();
      if (aPlanYear > bPlanYear) {
        return -1;
      } else if (aPlanYear < bPlanYear) {
        return 1;
      }

      // Sort by effective date in descending order
      const aEffectiveDate = new Date(a.enrollees[0].coverage_start);
      const bEffectiveDate = new Date(b.enrollees[0].coverage_start);
      if (aEffectiveDate > bEffectiveDate) {
        return -1;
      } else if (aEffectiveDate < bEffectiveDate) {
        return 1;
      }

      // Sort by policy status (submitted/resubmitted policies first)
      if (a.status === 'Submitted' || a.status === 'Resubmitted') {
        return -1;
      } else if (b.status === 'Submitted' || b.status === 'Resubmitted') {
        return 1;
      }

      return 0;
    });

    return sortedPolicies;
  }
}
