import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonSearchResponse } from './person-search-data';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  searchPersons(q: string): Observable<PersonSearchResponse[]> {
    return this.http.post<PersonSearchResponse[]>(
      `/api/transaction_management/people/search`,
      { q }
    );
  }
}
