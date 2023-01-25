import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import {
  APPLICATION_NAME,
  getBaseUrl,
  TenantConfigService,
} from '@enroll/tenant-config';
import { Observable } from 'rxjs';
import { SlcspEstimate } from './interfaces/slcsp-estimate';

@Injectable({
  providedIn: 'root',
})
export class SlcspEstimateService {
  private readonly tenant = inject(TenantConfigService).tenant;
  private readonly hostName = window.location.host;
  private readonly applicationName = inject(APPLICATION_NAME);
  private readonly http = inject(HttpClient);

  readonly baseUrl = getBaseUrl({
    host: this.hostName,
    tenant: this.tenant,
    application: this.applicationName,
  });

  constructor() {
    console.log({
      hostName: this.hostName,
      tenant: this.tenant,
      baseUrl: this.baseUrl,
      application: this.applicationName,
    });
  }

  getSlcspEstimate(formValue: unknown): Observable<SlcspEstimate> {
    return this.http.post<SlcspEstimate>(
      `${this.baseUrl}/api/v2/slcsp_calculator/estimate`,
      formValue
    );
  }
}
