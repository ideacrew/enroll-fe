import {
  Controller,
  Route,
  Post,
  Body,
  Get,
  Path,
  Security,
  Response,
} from 'tsoa';
import {
  PersonSearchRequest,
  PersonSearchResult,
} from '@enroll/carrier-portal/data-access';
import { Person } from '@enroll/carrier-portal/types';

@Route('transaction_management/people')
export class PeopleController extends Controller {
  /* eslint-disable @typescript-eslint/require-await, unicorn/no-null, @typescript-eslint/no-unused-vars */
  @Post('search')
  @Security('BearerJWT')
  @Response('403', 'Access Denied', null)
  public async searchPeople(
    @Body() requestBody: PersonSearchRequest
  ): Promise<PersonSearchResult[]> {
    return [];
  }
  /* eslint-enable @typescript-eslint/require-await, unicorn/no-null, @typescript-eslint/no-unused-vars */

  /* eslint-disable @typescript-eslint/require-await, unicorn/no-null */
  @Get('{id}')
  @Security('BearerJWT')
  @Response('403', 'Access Denied', null)
  @Response('404', 'Not Found', null)
  public async showPerson(@Path() id: string): Promise<Person> {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      id: id,
      person_name: {
        first_name: 'First',
        last_name: 'Last',
      },
      members: [],
      responsible_parties: [],
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }
  /* eslint-enable @typescript-eslint/require-await, unicorn/no-null */
}
