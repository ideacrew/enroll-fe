/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Applicant } from './models';
import { NewHouseholdMember } from './models/household-member';

@Injectable({
  providedIn: 'root',
})
export class ApplicantsService {
  constructor(private http: HttpClient) {}

  /**
   * Gets all applicants associated with an application ID
   * @param {string} applicationId the application ID
   * @returns {Observable<Applicant[]>} applicants
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
   * @param householdMember the base information required to create and applicant
   * @param applicationId the application id associated with the new applicant
   * @returns {Observable<Applicant>} the new applicant's ID
   */
  createNewHouseholdMember(
    applicationId: string,
    householdMember: NewHouseholdMember
  ): Observable<Applicant> {
    return this.http.post<Applicant>(
      `/applications/${applicationId}/applicants`,
      householdMember
    );
  }
}
