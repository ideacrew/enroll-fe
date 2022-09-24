import { Component } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { personSearchResults } from '../mocks/person-search-result';

import {
  PersonSearchResult,
  PersonNameQueryRequest,
  constructNameQuery,
} from '../person-search-data';
import { PersonService } from '../person.service';

@Component({
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss'],
})
export class MemberSearchComponent {
  searchType: 'member_id' | 'name' = 'member_id';

  searchResults: Subject<PersonSearchResult[]> = new Subject();
  searchResults$ = this.searchResults.asObservable();
  query!: string;
  firstName!: string;
  lastName!: string;

  constructor(private personService: PersonService) {}

  searchPersonByIdentifier(): void {
    this.personService
      .searchPeople({ q: this.query })
      .pipe(tap((results) => this.searchResults.next(results)))
      .subscribe();
  }

  searchPersonByName(): void {
    const searchRequest: PersonNameQueryRequest | undefined =
      constructNameQuery(this.firstName, this.lastName);
    if (searchRequest === undefined) {
      return;
    }
    this.personService
      .searchPeople(searchRequest)
      .pipe(tap((results) => this.searchResults.next(results)))
      .subscribe();
  }
}
