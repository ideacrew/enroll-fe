import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ApplicationsService,
  ApplicationVM,
} from '@enroll/financial-assistance/data-access';

@Component({
  templateUrl: './applications-list-page.component.html',
  styleUrls: ['./applications-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsListPageComponent {
  startedOnDate = new Date('2021-05-28');

  applications$: Observable<ApplicationVM[]>;

  constructor(private applicationsService: ApplicationsService) {
    this.applications$ = this.applicationsService.getExistingApplications();
  }
}
