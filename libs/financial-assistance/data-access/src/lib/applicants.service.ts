/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from './models';

@Injectable({
  providedIn: 'root',
})
export class ApplicantsService {
  constructor(private http: HttpClient) {}

  /**
   * Gets all applicants associated with an application ID
   * @param {string} applicationId the application ID
   * @returns {Observable<ApplicantVM[]>} applicants
   */
  getApplicants(
    applicationId: string | null = 'no-application-id'
  ): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(
      `/applications/${applicationId}/applicants`
    );
  }

  /**
   * Creates a new applicant for an application
   * @param baseApplicant the base information required to create and applicant
   * @param applicationId the application id associated with the new applicant
   * @returns {Observable<string>} the new applicant's ID
   */
  createNewApplicant(
    baseApplicant: Applicant,
    applicationId: string
  ): Observable<unknown> {
    return this.http.post<Applicant>(
      `/applications/${applicationId}/applicants`,
      baseApplicant
    );
  }
}
