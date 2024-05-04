import { Observable, map, catchError, of, tap } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ExpiredUserService } from '@enroll/console/auth';

export enum ResponseKind {
  /* eslint-disable @typescript-eslint/naming-convention */
  OK,
  ERROR,
  USER_EXPIRED,
  /* eslint-enable @typescript-eslint/naming-convention */
}

export type OkResult<T> = {
  ok: true;
  kind: ResponseKind.OK;
  data: T | null;
};

export type ErrorResult = {
  ok: false;
  kind: ResponseKind.ERROR;
  error: any;
};

export type UserExpiredResult = {
  ok: false;
  kind: ResponseKind.USER_EXPIRED;
  error: any;
};

export type DataResult<T> = OkResult<T> | ErrorResult | UserExpiredResult;

export function transformToResult<T>(
  expiredUserService: ExpiredUserService,
  obs: Observable<HttpResponse<T>>,
): Observable<DataResult<T>> {
  return obs.pipe(
    map((r) => parseResponseDataAs<T>(r)),
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    catchError(
      (err: any) => mapHttpErrorResponse(err)
    ),
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
    tap((res) => {
      if (res.kind === ResponseKind.USER_EXPIRED) {
        /* eslint-disable @typescript-eslint/no-unsafe-call */
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        expiredUserService.routeToExpired(res.error);
        /* eslint-enable @typescript-eslint/no-unsafe-member-access */
        /* eslint-enable @typescript-eslint/no-unsafe-call */
      }
    }),
  );
}

function mapHttpErrorResponse(err: any) {
  if (err instanceof HttpErrorResponse) {
    if (err.status === 401) {
      if (err.error === "Your account has expired due to inactivity. Please contact the site administrator.") {
        /* eslint-disable @typescript-eslint/no-unsafe-assignment */
        return <Observable<UserExpiredResult>>of({ok: false, kind: ResponseKind.USER_EXPIRED, error: err.error});
        /* eslint-enable @typescript-eslint/no-unsafe-assignment */
      }
    }
  }
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  return <Observable<ErrorResult>>of({ok: false, kind: ResponseKind.ERROR, error: err });
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */
}

function parseResponseDataAs<T>(resp: HttpResponse<T>): DataResult<T> {
  if (resp.ok) {
    return <OkResult<T>>{ok: true, kind: ResponseKind.OK, data: resp.body };
  }
  if (resp.body && resp.status === 401) {
    return <UserExpiredResult>{ok: false, kind: ResponseKind.USER_EXPIRED };
  } else {
    throw new Error(resp.statusText);
  }
}
