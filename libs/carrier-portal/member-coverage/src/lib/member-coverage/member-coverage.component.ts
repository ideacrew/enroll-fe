import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap, Observable } from 'rxjs';

import { Person } from '@enroll/carrier-portal/types';
import { PersonService } from '@enroll/carrier-portal/data-access';
import {
  FormatSsnPipe,
  MemberPolicyComponent,
  SortByStatusPipe,
} from '@enroll/carrier-portal/ui';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    DatePipe,
    FormatSsnPipe,
    SortByStatusPipe,
    MemberPolicyComponent,
    HttpClientModule,
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
