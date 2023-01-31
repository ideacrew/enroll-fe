import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TenantConfigService } from '@enroll/tenant-config';

import { SlcspEstimate } from './interfaces/slcsp-estimate';
import { SlcspEstimatePayload } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SlcspEstimateService {
  private readonly baseApiUrl = inject(TenantConfigService).baseApiUrl;
  private readonly http = inject(HttpClient);

  getSlcspEstimate(formValue: SlcspEstimatePayload): Observable<SlcspEstimate> {
    return this.http.post<SlcspEstimate>(
      `${this.baseApiUrl}/api/v2/slcsp_calculator/estimate`,
      formValue
    );
  }
}
