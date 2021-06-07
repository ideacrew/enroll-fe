import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Applicant } from '@enroll/financial-assistance/entities';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  constructor(private http: HttpClient) {}

  getApplicants(applicationId: string): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(
      `/applications/${applicationId}/applicants`
    );
  }
}
