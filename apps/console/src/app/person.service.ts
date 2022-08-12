import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonSearchResult } from './person-search-data';
import { Person } from './person-view-data';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  searchPersons(q: string): Observable<PersonSearchResult[]> {
    return this.http.post<PersonSearchResult[]>(
      `/api/transaction_management/people/search`,
      { q }
    );
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(
      `/api/transaction_management/people/${id}`,
      {}
    );
  }
}
