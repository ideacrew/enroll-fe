import { Observable, map, catchError, of } from 'rxjs';

export type OkResult<T> = {
  ok: true;
  data: T;
};

export type ErrorResult = {
  ok: false;
};

export type DataResult<T> = OkResult<T> | ErrorResult;

export function transformToResult<T>(
  obs: Observable<T>
): Observable<DataResult<T>> {
  return obs.pipe(
    map((d: T) => <OkResult<T>>{ ok: true, data: d }),
    catchError(() => <Observable<ErrorResult>>of({ ok: false }))
  );
}
