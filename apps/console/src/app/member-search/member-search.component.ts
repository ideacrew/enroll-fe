import { Component } from '@angular/core';
import { Subject, tap } from 'rxjs';

import { PersonSearchResult } from '../person-search-data';
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

  constructor(private personService: PersonService) {}

  searchPersons(): void {
    this.personService
      .searchPersons(this.query)
      .pipe(tap((results) => this.searchResults.next(results)))
      .subscribe();
  }
}
