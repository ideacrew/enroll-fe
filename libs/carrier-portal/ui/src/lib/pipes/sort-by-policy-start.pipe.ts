import { Pipe, PipeTransform } from '@angular/core';
import {
  Policy,
  isCancelled,
  startsBefore,
} from '@enroll/carrier-portal/types';

@Pipe({
  name: 'sortByPolicyStart',
  standalone: true,
})
export class SortByPolicyStartPipe implements PipeTransform {
  transform(policies: Policy[]): Policy[] {
    policies.sort((a, b) => {
      // We want date ascending, so normal return values for sort are
      // inverted.
      // Remember, in javascript sort, >0 means reverse the elements.

      // If they aren't the same coverage year, don't mind the cancel logic -
      // just sort them.
      if (a.plan.coverage_year != b.plan.coverage_year) {
        return a.plan.coverage_year <= b.plan.coverage_year ? 1 : -1;
      }

      // If one of them is canceled but the other isn't, the canceled one is
      // punted to last place. (As long as it's within the same coverage year,
      // which we handle above)
      if (isCancelled(a) && !isCancelled(b)) {
        return 1;
      } else if (isCancelled(b) && !isCancelled(a)) {
        return -1;
      }

      // Otherwise just sort them by reverse order for date
      return startsBefore(a, b) ? 1 : -1;
    });
    return policies;
  }
}
