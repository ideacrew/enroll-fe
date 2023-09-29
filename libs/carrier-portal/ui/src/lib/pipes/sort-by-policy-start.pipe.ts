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
      // Make sure that if for some reason the enrollee array is empty, we don't
      // throw an error
      const aEffectiveDate =
        a.enrollees && a.enrollees.length > 0
          ? new Date(a.enrollees[0].coverage_start)
          : '0';
      const bEffectiveDate =
        b.enrollees && b.enrollees.length > 0
          ? new Date(b.enrollees[0].coverage_start)
          : '0';
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
