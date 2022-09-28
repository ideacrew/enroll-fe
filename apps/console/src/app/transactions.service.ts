import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';
import { EnrollmentTransaction } from './enrollment-transaction-view-data';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  getTransaction(id: string) {
    return this.http.get<EnrollmentTransaction>(
      `${this.config.baseApiUrl}/transaction_management/enrollment_transactions/${id}`
    );
  }
}
