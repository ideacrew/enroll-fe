import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Applicant {
  fullName: string;
  birthDate: string;
  gender: string;
  relationship: string;
  status: string;
}

export interface ApplicantVM {
  fullName: string;
  birthDate: Date;
  gender: string;
  relationship: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApplicantsService {
  constructor(private http: HttpClient) {}

  getApplicants(applicationId: string | null): Observable<ApplicantVM[]> {
    return this.http
      .get<Applicant[]>(
        `/applications/${applicationId ?? 'no-application-id'}/applicants`
      )
      .pipe(
        map((applicants) =>
          applicants.map((applicant) => ({
            ...applicant,
            birthDate: new Date(applicant.birthDate),
          }))
        )
      );
  }
}
