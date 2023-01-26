import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TenantConfigService } from '@enroll/tenant-config';

import { SlcspEstimate } from './interfaces/slcsp-estimate';

@Injectable({
  providedIn: 'root',
})
export class SlcspEstimateService {
  private readonly tenantConfig = inject(TenantConfigService).tenantConfig;
  private readonly http = inject(HttpClient);

  getSlcspEstimate(formValue: unknown): Observable<SlcspEstimate> {
    return this.http.post<SlcspEstimate>(
      `${this.tenantConfig.baseApiUrl}/api/v2/slcsp_calculator/estimate`,
      formValue
    );
  }
}