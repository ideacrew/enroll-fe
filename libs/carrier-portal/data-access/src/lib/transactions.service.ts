import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnrollmentTransaction } from '@enroll/carrier-portal/types';
import { TenantConfigService } from '@enroll/tenant-config';
import { ExpiredUserService } from '@enroll/console/auth';
import { DataResult, transformToResult } from './types';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;
  expiredUserService = inject(ExpiredUserService);

  getTransaction(id: string): Observable<DataResult<EnrollmentTransaction>> {
    return transformToResult<EnrollmentTransaction>(
      this.expiredUserService,
      this.http.get<EnrollmentTransaction>(
        `${this.baseApiUrl}/transaction_management/enrollment_transactions/${id}`,
        { observe: 'response' },
      ),
    );
  }
}
