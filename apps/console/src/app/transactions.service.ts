import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { TenantConfigService } from '@enroll/tenant-config';

import { EnrollmentTransaction } from './enrollment-transaction-view-data';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;

  getTransaction(id: string) {
    return this.http.get<EnrollmentTransaction>(
      `${this.baseApiUrl}/transaction_management/enrollment_transactions/${id}`
    );
  }
}
