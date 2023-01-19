import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

import { MARKETPLACE_API_KEY } from './api-key';
import {
  MarketplaceCounty,
  MarketplaceCountyResponse,
} from './interfaces/county';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  apiKey = MARKETPLACE_API_KEY;
  baseUrl = 'https://marketplace.api.healthcare.gov/api/v1';
  http = inject(HttpClient);

  searchForZipCode(zipCode: string): Observable<MarketplaceCounty> {
    if (zipCode.length !== 5) {
      return throwError(() => new Error('Zip code must be 5 digits'));
    }

    return this.http
      .get<MarketplaceCountyResponse>(
        `${this.baseUrl}/counties/by/zip/${zipCode}`,
        {
          params: { apikey: this.apiKey, year: '2022' },
        }
      )
      .pipe(map((response) => response.counties[0]));
  }
}
