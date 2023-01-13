import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type Application = {
  id: string;
  status: string;
  startedOn: string;
  submittedOn?: string;
  determination?: string;
}
export type ApplicationVM = {
  id: string;
  status: string;
  startedOn: Date;
  submittedOn?: Date;
  determination?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {}

  getExistingApplications(): Observable<ApplicationVM[]> {
    return this.http.get<Application[]>(`/applications`).pipe(
      map((applications) =>
        applications.map((application) => {
          const submittedOn = application.submittedOn
            ? new Date(application.submittedOn)
            : undefined;

          return {
            ...application,
            startedOn: new Date(application.startedOn),
            submittedOn,
          };
        })
      )
    );
  }

  submitNewApplication(application: unknown): Observable<unknown> {
    return this.http.post(`/applications`, application);
  }
}
