import { Pipe, PipeTransform } from '@angular/core';

import { Transaction } from '@enroll/carrier-portal/types';

@Pipe({
  name: 'sortByDate',
  standalone: true,
})
export class SortByDatePipe implements PipeTransform {
  transform(transactions: Transaction[]): Transaction[] {
    const rawTransactions = [...transactions];

    return rawTransactions.sort(
      (a, b) =>
        new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
    );
  }
}
