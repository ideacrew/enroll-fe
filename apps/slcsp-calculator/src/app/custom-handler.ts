import { TranslocoMissingHandler } from '@ngneat/transloco';

export class CustomHandler implements TranslocoMissingHandler {
  handle() {
    return 'missing translation';
  }
}
