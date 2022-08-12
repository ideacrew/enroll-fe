import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap, Observable } from 'rxjs';
import { Person } from '../person-view-data';
import { PersonService } from '../person.service';

@Component({
  selector: 'enroll-person-coverage',
  templateUrl: './person-coverage.component.html',
  styleUrls: ['./person-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCoverageComponent {
  id!: string | null;
  person$ : Observable<Person> = this.route.paramMap.pipe(
    map((parameters: ParamMap) => parameters.get('id') ?? '___IGNORE___'),
    filter((idString: string) => idString !== '___IGNORE___'),
    switchMap((id: string) =>
      this.personService.getPerson(id)
    )
  );

  constructor(private personService: PersonService, private route: ActivatedRoute) {}
}
