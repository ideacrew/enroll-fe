import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap, Observable } from 'rxjs';
import {
  TRANSLOCO_SCOPE,
  Translation,
  TranslocoModule,
} from '@ngneat/transloco';

import { Enrollee, Person, Policy } from '@enroll/carrier-portal/types';
import { PersonService, DataResult } from '@enroll/carrier-portal/data-access';
import {
  FormatSsnPipe,
  MemberPolicyComponent,
  SortByPolicyStartPipe,
} from '@enroll/carrier-portal/ui';
import { scopeLoader } from '@enroll/shared/i18n';
import { PersonContactInfoComponent } from './person-contact-info.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormatSsnPipe,
    SortByPolicyStartPipe,
    MemberPolicyComponent,
    PersonContactInfoComponent,
    HttpClientModule,
    TranslocoModule,
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
  person$: Observable<DataResult<Person>> = this.route.paramMap.pipe(
    map((parameters: ParamMap) => parameters.get('id') ?? '___IGNORE___'),
    filter((idString: string) => idString !== '___IGNORE___'),
    switchMap((id: string) => this.personService.getPerson(id))
  );

  public policyExpanded(pol: Policy): boolean {
    return !this.isCanceled(pol);
  }

  private subscriber(pol: Policy): Enrollee | undefined {
    return pol.enrollees.find(
      (en: Enrollee) => en.hbx_member_id === pol.subscriber_hbx_member_id
    );
  }

  private isCanceled(pol: Policy): boolean {
    const sub = this.subscriber(pol);
    if (sub) {
      if (sub.coverage_end) {
        return sub.coverage_end <= sub.coverage_start;
      }
    }
    return false;
  }

  private isTerminated(pol: Policy): boolean {
    const sub = this.subscriber(pol);
    if (sub) {
      return !!sub.coverage_end;
    }
    return false;
  }
}
