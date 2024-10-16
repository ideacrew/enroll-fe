import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TenantConfigService } from '@enroll/tenant-config';
import { Person } from '@enroll/carrier-portal/types';
import { ExpiredUserService } from '@enroll/console/auth';
import { PersonSearchRequest, PersonSearchResult } from './types';
import { DataResult, transformToResult } from './types';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;
  expiredUserService = inject(ExpiredUserService);

  getPerson(id: string): Observable<DataResult<Person>> {
    return transformToResult<Person>(
      this.expiredUserService,
      this.http.get<Person>(
        `${this.baseApiUrl}/transaction_management/people/${id}`,
        { observe: 'response' },
      ),
    );
  }

  searchPeople(psq: PersonSearchRequest) {
    return this.http.post<PersonSearchResult[]>(
      `${this.baseApiUrl}/transaction_management/people/search`,
      psq,
    );
  }
}
