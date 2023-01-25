import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, EMPTY } from 'rxjs';

export type ColorConfig = Record<string, string>;

export function initializeAppFactory(
  httpClient: HttpClient
): () => Observable<ColorConfig> {
  return () =>
    httpClient.get<ColorConfig>('/colors.json').pipe(
      tap((config) => setCustomProperties(config)),
      catchError((error) => {
        console.log(error);
        return EMPTY;
      })
    );
}

const setCustomProperties = (config: ColorConfig) => {
  for (const [key, value] of Object.entries(config)) {
    document.documentElement.style.setProperty(key, value);
  }
};
