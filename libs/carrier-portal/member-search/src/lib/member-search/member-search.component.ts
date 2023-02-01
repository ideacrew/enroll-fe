import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Subject, tap } from 'rxjs';

import {
  constructNameQuery,
  PersonNameQueryRequest,
  PersonSearchResult,
  PersonService,
} from '@enroll/carrier-portal/data-access';
import { FormatSsnPipe } from '@enroll/carrier-portal/ui';

@Component({
  selector: 'enroll-member-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FormatSsnPipe,
    HttpClientModule,
  ],
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  personService = inject(PersonService);

  get noResultsMessage(): string {
    return this.searchType === 'member_id'
      ? 'No members found with that SSN or HBX ID'
      : 'No members found with that name';
  }

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
