import { Pipe, PipeTransform } from '@angular/core';

import { Policy } from '@enroll/carrier-portal/types';

@Pipe({
  name: 'sortByStatus',
  standalone: true,
})
export class SortByStatusPipe implements PipeTransform {
  transform(policies: Policy[], desiredStatus: string): Policy[] {
    const rawPolicies = [...policies];

    const sortedPolicies = rawPolicies.sort((a) => {
      const statusA = a.status;
      // const statusB = b.status;

      return statusA === desiredStatus ? -1 : 1;
    });
    return sortedPolicies;
  }
}
