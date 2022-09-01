import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable, map, filter, switchMap } from 'rxjs';
import { EnrollmentTransaction } from '../enrollment-transaction-view-data';

import { TransactionsService } from '../transactions.service';

@Component({
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent {
  transaction$: Observable<EnrollmentTransaction> = this.route.paramMap.pipe(
    map((parameters: ParamMap) => parameters.get('id') ?? '___IGNORE___'),
    filter((idString: string) => idString !== '___IGNORE___'),
    switchMap((id: string) => this.transactionsService.getTransaction(id))
  );

  constructor(
    private transactionsService: TransactionsService,
    private route: ActivatedRoute
  ) {}
}
