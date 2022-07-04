import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Income } from '@enroll/financial-assistance/entities';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(private http: HttpClient) {}

  getIncomes({
    applicationId,
    applicantId,
  }: {
    applicationId: string;
    applicantId: string;
  }): Observable<Income[]> {
    return this.http.get<Income[]>(
      `/applications/${applicationId}/applicants/${applicantId}`
    );
  }
}
