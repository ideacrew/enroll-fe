import { inject, Injectable } from '@angular/core';
import { TenantConfigService } from '@enroll/tenant-config';
import { ExpiredUserService } from '@enroll/console/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LastUpdatedMetadataResult } from './types/last-update';
import { DataResult } from './types';
import { transformToResult } from './types';

@Injectable({
  providedIn: 'root',
})
export class PortalDataService {
  http = inject(HttpClient);
  baseApiUrl = inject(TenantConfigService).baseApiUrl;
  expiredUserService = inject(ExpiredUserService);

  getLatestUpdateData(): Observable<DataResult<LastUpdatedMetadataResult>> {
    return transformToResult<LastUpdatedMetadataResult>(
      this.expiredUserService,
      this.http.get<LastUpdatedMetadataResult>(
        `${this.baseApiUrl}/transaction_management/portal_data/last_update`,
        { 
          observe: 'response'
        },
      ),
    );
  }
}
