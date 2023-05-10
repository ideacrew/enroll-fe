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
      const firstDate = this.policyStartDate(a);
      const secondDate = this.policyStartDate(b);
      if (firstDate > secondDate) {
        return -1;
      } else if (firstDate < secondDate) {
        return 1;
      }
      return 0;
    });
    return sortedPolicies;
  }

  private policyStartDate(policy: Policy): string {
    const enrollees = policy.enrollees;
    return enrollees
      .map((a) => a.coverage_start)
      .sort()
      .reverse()[0];
  }
}
