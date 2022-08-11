import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonSearchResult } from './person-search-data';

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
}
