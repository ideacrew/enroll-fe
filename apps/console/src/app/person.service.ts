import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TenantConfigService } from '@enroll/tenant-config';

import { PersonSearchResult, PersonSearchRequest } from './person-search-data';
import { Person } from './person-view-data';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(
      `${this.baseApiUrl}/transaction_management/people/${id}`
    );
  }

  searchPeople(psq: PersonSearchRequest) {
    return this.http.post<PersonSearchResult[]>(
      `${this.baseApiUrl}/transaction_management/people/search`,
      psq
    );
  }
}
