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
      if (a.enrollees[0].coverage_start !== b.enrollees[0].coverage_start) {
        return a.enrollees[0].coverage_start <= b.enrollees[0].coverage_start
          ? 1
          : -1;
      }
      // If they are the same coverage year, sort by status
      if (a.enrollees[0].coverage_start === b.enrollees[0].coverage_start) {
        if (a.status === 'submitted') {
          return a.status <= b.status ? 1 : -1;
        }
      }

      return 0; // add default return value
    });
  }
}
