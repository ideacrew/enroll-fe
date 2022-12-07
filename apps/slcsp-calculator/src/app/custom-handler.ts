import { TranslocoMissingHandler } from '@ngneat/transloco';

export class CustomHandler implements TranslocoMissingHandler {
  handle() {
    // eslint-disable-next-line unicorn/no-null
    return 'missing translation';
  }
}
