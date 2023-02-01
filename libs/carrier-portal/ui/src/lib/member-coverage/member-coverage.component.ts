import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap, Observable } from 'rxjs';

import { PersonService } from '@enroll/carrier-portal/data-access';
import { Person } from '@enroll/carrier-portal/types';

import { MemberPolicyComponent } from '../member-policy/member-policy.component';
import { FormatSsnPipe, SortByStatusPipe } from '../pipes';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    DatePipe,
    AsyncPipe,
    MemberPolicyComponent,
    FormatSsnPipe,
    SortByStatusPipe,
  ],
  templateUrl: './member-coverage.component.html',
  styleUrls: ['./member-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberCoverageComponent {
  personService = inject(PersonService);
  route = inject(ActivatedRoute);

  id!: string | null;
  person$: Observable<Person> = this.route.paramMap.pipe(
    map((parameters: ParamMap) => parameters.get('id') ?? '___IGNORE___'),
    filter((idString: string) => idString !== '___IGNORE___'),
    switchMap((id: string) => this.personService.getPerson(id))
  );
}
