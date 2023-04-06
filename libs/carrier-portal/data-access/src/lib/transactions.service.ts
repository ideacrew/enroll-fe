import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnrollmentTransaction } from '@enroll/carrier-portal/types';
import { TenantConfigService } from '@enroll/tenant-config';

import { DataResult, transformToResult } from './types';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;

  getTransaction(id: string): Observable<DataResult<EnrollmentTransaction>> {
    return transformToResult(
      this.http.get<EnrollmentTransaction>(
        `${this.baseApiUrl}/transaction_management/enrollment_transactions/${id}`
      )
    );
  }
}
