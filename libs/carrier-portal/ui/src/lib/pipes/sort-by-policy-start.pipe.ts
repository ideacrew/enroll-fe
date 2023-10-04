import { Pipe, PipeTransform } from '@angular/core';
import { Policy } from '@enroll/carrier-portal/types';

@Pipe({
  name: 'sortByPolicyStart',
  standalone: true,
})
export class SortByPolicyStartPipe implements PipeTransform {
  transform(policies: Policy[]): Policy[] {
    return [...policies].sort((a, b) => {
      // First sort by coverage year derived from plan.coverage_year
      if (policyStartDate(a) !== policyStartDate(b)) {
        return policyStartDate(a) <= policyStartDate(b) ? 1 : -1;
      }
      // If they are the same coverage year, sort by status
      if (policyStartDate(a) === policyStartDate(b)) {
        if (a.status === 'Submitted') {
          return a.status <= b.status ? 1 : -1;
        }
      }

      return 0; // add default return value
    });
  }
}

function policyStartDate(policy: Policy): string {
  const enrollees = policy.enrollees;
  return enrollees
    .map((a) => a.coverage_start)
    .sort()
    .reverse()[0];
}
