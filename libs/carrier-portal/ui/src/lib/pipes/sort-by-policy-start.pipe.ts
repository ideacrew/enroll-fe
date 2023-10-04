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
      const startDateA = policyStartDate(a);
      const startDateB = policyStartDate(b);
      if (startDateA !== startDateB) {
        return startDateA <= startDateB ? 1 : -1;
      }

      // If they are the same coverage year, sort by status
      if (a.status === 'Submitted') {
        return a.status <= b.status ? 1 : -1;
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
