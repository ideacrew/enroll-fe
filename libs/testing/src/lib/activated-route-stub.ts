import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  subject = new ReplaySubject<ParamMap>();

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();

  constructor(initialParameters?: Params) {
    this.setParamMap(initialParameters);
  }

  /** Set the paramMap observable's next value */
  setParamMap(parameters: Params = {}) {
    this.subject.next(convertToParamMap(parameters));
  }
}
