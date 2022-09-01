import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enrollmentTransactionRoutes } from './endpoints';
import { EnrollmentTransaction } from './enrollment-transaction-view-data';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getTransaction(id: string) {
    return this.http.get<EnrollmentTransaction>(
      enrollmentTransactionRoutes.show(id)
    );
  }
}
