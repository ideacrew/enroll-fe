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
  private readonly apiKey = MARKETPLACE_API_KEY;
  private readonly baseUrl = 'https://marketplace.api.healthcare.gov/api/v1';
  private readonly http = inject(HttpClient);

  searchForZipCode(zipCode: string): Observable<MarketplaceCounty[] | string> {
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
      .pipe(
        map((response) =>
          response.counties.length === 0 ? 'No results' : response.counties
        )
      );
  }
}
