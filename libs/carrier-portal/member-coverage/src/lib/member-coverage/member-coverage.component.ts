import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AsyncPipe,
  DatePipe,
  NgFor,
  NgIf,
  TitleCasePipe,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap, Observable } from 'rxjs';
import {
  TRANSLOCO_SCOPE,
  Translation,
  TranslocoModule,
} from '@ngneat/transloco';

import { Person } from '@enroll/carrier-portal/types';
import { PersonService } from '@enroll/carrier-portal/data-access';
import {
  FormatSsnPipe,
  MemberPolicyComponent,
  SortByStatusPipe,
} from '@enroll/carrier-portal/ui';
import { scopeLoader } from '@enroll/shared/i18n';

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
    TranslocoModule,
    TitleCasePipe,
  ],
  templateUrl: './member-coverage.component.html',
  styleUrls: ['./member-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'memberCoverage',
        loader: scopeLoader(
          (lang: string, root: string) =>
            import(`./${root}/${lang}.json`) as Promise<Translation>
        ),
      },
    },
  ],
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

  fullAddress(address: any) {
    var str = '';
    if (address) {
      str += `${address.address_1},`;

      if (address.address_2) {
        str += `${address.address_2},`;
      }

      str += `${address.city}, ${address.state} ${address.zipcode}`;
    }
    return str;
  }
}
