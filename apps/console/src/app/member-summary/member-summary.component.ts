import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable, map, filter, switchMap } from 'rxjs';
import { Person } from '../person-view-data';
import { PersonService } from '../person.service';

@Component({
  templateUrl: './member-summary.component.html',
  styleUrls: ['./member-summary.component.scss'],
})
export class MemberSummaryComponent {
  person$: Observable<Person> = this.route.paramMap.pipe(
    map((parameters: ParamMap) => parameters.get('id') ?? '___IGNORE___'),
    filter((idString: string) => idString !== '___IGNORE___'),
    switchMap((id: string) => this.personService.getPerson(id))
  );

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {}
}
