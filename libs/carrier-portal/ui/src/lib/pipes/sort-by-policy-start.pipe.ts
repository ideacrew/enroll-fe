import { Pipe, PipeTransform } from '@angular/core';
import { Policy } from '@enroll/carrier-portal/types';

@Pipe({
  name: 'sortByPolicyStart',
  standalone: true,
})
export class SortByPolicyStartPipe implements PipeTransform {
  transform(policies: Policy[]): Policy[] {
    policies.sort((a, b) => {
      // First, sort by coverage_year in descending order
      if (b.plan.coverage_year !== a.plan.coverage_year) {
        return b.plan.coverage_year.localeCompare(a.plan.coverage_year);
      }
      // Then, prioritize "Submitted" status
      if (a.status === 'Submitted' && b.status !== 'Submitted') {
        return -1;
      }
      if (a.status !== 'Submitted' && b.status === 'Submitted') {
        return 1;
      }
      return 0;
    });
    return policies;
  }
}
