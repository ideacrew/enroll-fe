import { Component } from '@angular/core';
import { Subject, tap } from 'rxjs';

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

  searchTerm: string | undefined;

  searchResults: Subject<PersonSearchResult[]> = new Subject();
  searchResults$ = this.searchResults.asObservable();
  query!: string;
  firstName!: string;
  lastName!: string;

  get noResultsMessage(): string {
    return this.searchType === 'member_id'
      ? 'No members found with that SSN or HBX ID'
      : 'No members found with that name';
  }

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

  searchBySearchTerm(): void {
    if (this.searchType === 'member_id') {
      this.query = this.searchTerm || '';
      this.searchPersonByIdentifier();
    } else {
      const [firstName, lastName] = (this.searchTerm || '').split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
      this.searchPersonByName();
    }
  }
}
