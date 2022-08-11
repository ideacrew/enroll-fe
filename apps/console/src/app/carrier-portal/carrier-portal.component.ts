import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { PersonSearchResponse } from '../person-search-data';
import { PersonService } from '../person.service';

@Component({
  selector: 'enroll-carrier-portal',
  templateUrl: './carrier-portal.component.html',
  styleUrls: ['./carrier-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrierPortalComponent {
  searchResults: Subject<PersonSearchResponse[]> = new Subject();
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
