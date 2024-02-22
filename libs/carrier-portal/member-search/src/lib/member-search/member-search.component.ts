import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'enroll-member-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FormatSsnPipe,
    HttpClientModule,
    TranslocoModule,
  ],
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberSearchComponent implements OnInit {
  loading = false;
  searchType: 'member_id' | 'name' = 'member_id';

  searchTerm: string | undefined;

  pageHeading: BehaviorSubject<string> = new BehaviorSubject('Member Search');
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

  ngOnInit(): void {
    if (localStorage.getItem('searchTerm')) {
      this.searchTerm = localStorage.getItem('searchTerm') || '';
      this.searchType =
        (localStorage.getItem('searchType') as 'member_id') || '';

      this.searchBySearchTerm();
    }
  }

  searchPersonByIdentifier(): void {
    this.loading = true;
    this.personService
      .searchPeople({ q: this.query })
      .pipe(
        tap((results) => {
          this.pageHeading.next(this.generatePageHeading(this.query));
          this.searchResults.next(results);
          this.loading = false;
        }),
      )
      .subscribe();
  }

  searchPersonByName(): void {
    this.loading = true;
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
              `${this.firstName ?? ''} ${this.lastName ?? ''}`,
            ),
          );
          this.searchResults.next(results);
          this.loading = false;
        }),
      )
      .subscribe();
  }

  searchBySearchTerm(): void {
    if (this.searchTerm && this.searchTerm.length > 1) {
      this.query = this.searchTerm || '';
      const [firstName, lastName] = (this.searchTerm || '').split(' ');
      this.firstName = firstName;
      this.lastName = lastName;

      localStorage.setItem('searchTerm', this.searchTerm);
      localStorage.setItem('searchType', this.searchType);

      if (
        localStorage.getItem('searchTerm') === 'member_id' ||
        this.searchType === 'member_id'
      ) {
        this.searchPersonByIdentifier();
      } else {
        this.searchPersonByName();
      }
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

  resetResults() {
    localStorage.removeItem('searchTerm');
    localStorage.removeItem('searchType');
    this.searchTerm = '';
    this.searchType = 'member_id';
    this.searchResults.next([]);
    this.pageHeading.next('Member Search');
  }
}
