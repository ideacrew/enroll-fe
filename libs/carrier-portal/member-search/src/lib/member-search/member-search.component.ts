import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BehaviorSubject, Subject, tap } from 'rxjs';

import {
  constructNameQuery,
  PersonNameQueryRequest,
  PersonSearchResult,
  PersonService,
} from '@enroll/carrier-portal/data-access';

@Component({
  selector: 'enroll-member-search',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberSearchComponent {
  searchType: 'member_id' | 'name' = 'member_id';
  searchTerm: string | undefined;
  query!: string;
  firstName!: string;
  lastName!: string;

  pageHeading: BehaviorSubject<string> = new BehaviorSubject('');
  pageHeading$ = this.pageHeading.asObservable();

  searchResults: Subject<PersonSearchResult[]> = new Subject();
  searchResults$ = this.searchResults.asObservable();

  personService = inject(PersonService);

  get noResultsMessage(): string {
    return this.searchType === 'member_id'
      ? 'No members found with that SSN or HBX ID'
      : 'No members found with that name';
  }

  public setSearchType(type: 'member_id' | 'name'): void {
    this.searchType = type;
    this.searchTerm = '';
    this.firstName = '';
    this.lastName = '';
    this.query = '';
  }

  public searchBySearchTerm(): void {
    if (this.searchTerm && this.searchTerm.length > 1) {
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

  private searchPersonByIdentifier(): void {
    this.personService
      .searchPeople({ q: this.query })
      .pipe(
        tap((results) => {
          this.pageHeading.next(`Results for "${this.query}"`);
          this.searchResults.next(results);
        })
      )
      .subscribe();
  }

  private searchPersonByName(): void {
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
            `Results for "${this?.firstName} ${this?.lastName}"`
          );
          this.searchResults.next(results);
        })
      )
      .subscribe();
  }
}
