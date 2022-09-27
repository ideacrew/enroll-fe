import { Component } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

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

  private pageHeading: BehaviorSubject<string> = new BehaviorSubject(
    'Member Search'
  );
  pageHeading$ = this.pageHeading.asObservable();

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
      .pipe(
        tap((results) => {
          this.pageHeading.next(this.generatePageHeading(this.query));
          this.searchResults.next(results);
        })
      )
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
      .pipe(
        tap((results) => {
          this.pageHeading.next(
            this.generatePageHeading(
              `${this.firstName ?? ''} ${this.lastName ?? ''}`
            )
          );
          this.searchResults.next(results);
        })
      )
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

  setSearchType(type: 'member_id' | 'name'): void {
    this.searchType = type;
    this.searchTerm = '';
    this.firstName = '';
    this.lastName = '';
    this.query = '';
  }

  generatePageHeading(query: string): string {
    const trimmed = query.trim();

    return `Search Results for "${trimmed}"`;
  }
}
