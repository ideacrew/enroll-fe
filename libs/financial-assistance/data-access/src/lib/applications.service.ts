import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FinancialAssistanceApplication } from '@enroll/financial-assistance/entities';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {}

  getExistingApplications(): Observable<FinancialAssistanceApplication[]> {
    return this.http.get<FinancialAssistanceApplication[]>(`/applications`);
  }

  submitNewApplication(application: unknown): Observable<unknown> {
    return this.http.post(`/applications`, application);
  }
}

