import { of } from 'rxjs';
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
  @Post('search')
  @Security('BearerJWT')
  @Response('403', 'Access Denied', null)
  public async searchPeople(
    @Body() requestBody: PersonSearchRequest
  ): Promise<PersonSearchResult[]> {
    return [];
  }

  @Get('{id}')
  @Security('BearerJWT')
  @Response('403', 'Access Denied', null)
  @Response('404', 'Not Found', null)
  public async showPerson(@Path() id: string): Promise<Person> {
    return {
      id: id,
      person_name: {
        first_name: 'First',
        last_name: 'Last',
      },
      members: [],
      responsible_parties: [],
    };
  }
}
