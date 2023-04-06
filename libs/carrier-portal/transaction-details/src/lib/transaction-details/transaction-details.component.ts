import { HttpClientModule } from '@angular/common/http';
import {
  Translation,
  TranslocoModule,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { Component, inject } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable, map, filter, switchMap } from 'rxjs';
import { AsyncPipe, DatePipe, NgIf, TitleCasePipe } from '@angular/common';

import {
  TransactionsService,
  DataResult,
} from '@enroll/carrier-portal/data-access';
import { EnrollmentTransaction } from '@enroll/carrier-portal/types';
import {
  ParseEdiDataPipe,
  ParseRawDatePipe,
  ParseRawTimePipe,
} from '@enroll/carrier-portal/ui';
import { scopeLoader } from '@enroll/shared/i18n';

@Component({
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    ParseRawDatePipe,
    AsyncPipe,
    ParseEdiDataPipe,
    ParseRawTimePipe,
    HttpClientModule,
    TranslocoModule,
    TitleCasePipe,
  ],
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'transactionDetails',
        loader: scopeLoader(
          (lang: string, root: string) =>
            import(`./${root}/${lang}.json`) as Promise<Translation>
        ),
      },
    },
  ],
})
export class TransactionDetailsComponent {
  transactionsService = inject(TransactionsService);
  route = inject(ActivatedRoute);

  transaction$: Observable<DataResult<EnrollmentTransaction>> =
    this.route.paramMap.pipe(
      map((parameters: ParamMap) => parameters.get('id') ?? '___IGNORE___'),
      filter((idString: string) => idString !== '___IGNORE___'),
      switchMap((id: string) => this.transactionsService.getTransaction(id))
    );
}
