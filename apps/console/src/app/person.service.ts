import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PersonSearchResult, PersonSearchRequest } from './person-search-data';
import { Person } from './person-view-data';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(
      `${this.config.baseApiUrl}/transaction_management/people/${id}`
    );
  }

  searchPeople(psq: PersonSearchRequest) {
    return this.http.post<PersonSearchResult[]>(
      `${this.config.baseApiUrl}/transaction_management/people/search`,
      psq
    );
  }
}
