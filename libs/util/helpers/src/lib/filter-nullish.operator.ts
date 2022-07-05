import { Observable, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export const filterNullish = <T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> =>
  // eslint-disable-next-line unicorn/no-null
  pipe(filter((x) => x != null) as OperatorFunction<T | null | undefined, T>);
