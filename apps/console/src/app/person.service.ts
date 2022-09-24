import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  PersonSearchResult,
  PersonSearchRequest,
  isPersonMemberIdentifierSearchRequest,
} from './person-search-data';
import { peopleRoutes } from './endpoints';
import { Person } from './person-view-data';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(peopleRoutes.show(id), {});
  }

  searchPeople(psq: PersonSearchRequest) {
    console.log(psq);
    return this.http.post<PersonSearchResult[]>(peopleRoutes.search, psq);
  }
}
