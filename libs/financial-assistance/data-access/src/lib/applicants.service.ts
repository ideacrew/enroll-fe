/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Applicant {
  applicantId: string;
  fullName: string;
  birthDate: string;
  gender: string;
  relationship: string;
  status: string;
}

export interface ApplicantVM {
  applicantId: string;
  fullName: string;
  birthDate: Date;
  gender: string;
  relationship: string;
  status: string;
}

export interface BaseApplicant {
  applicantId?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  is_applying_coverage: boolean;
  dob: string; // 1970-01-01
  ssn: string;
  no_ssn?: unknown;
  gender: 'male' | 'female';
  relationship: string;
  us_citizen: boolean;
  immigration_doc_type?: string;
  naturalization_doc_type?: string;
  indian_tribe_member: boolean;
  tribal_id?: string;
  is_incarcerated: boolean;
  ethnicity: string[];
  form_for_consumer_role: boolean;
  is_consumer_role: boolean;
  same_with_primary: boolean;
  addresses?: Array<{
    kind: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip: string;
    county?: string;
  }>;
  is_temporarily_out_of_state?: boolean;
  is_homeless?: boolean;
  family_id?: string;
}

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
  ): Observable<ApplicantVM[]> {
    return this.http
      .get<Applicant[]>(`/applications/${applicationId}/applicants`)
      .pipe(
        map((applicants) =>
          // Need a separate mapping function here for testability
          applicants.map((applicant) => ({
            ...applicant,
            birthDate: new Date(applicant.birthDate),
          }))
        )
      );
  }

  /**
   * Creates a new applicant for an application
   * @param baseApplicant the base information required to create and applicant
   * @param applicationId the application id associated with the new applicant
   * @returns {Observable<string>} the new applicant's ID
   */
  createNewApplicant(
    baseApplicant: BaseApplicant,
    applicationId: string
  ): Observable<unknown> {
    return this.http.post<BaseApplicant>(
      `/applications/${applicationId}/applicants`,
      baseApplicant
    );
  }
}
