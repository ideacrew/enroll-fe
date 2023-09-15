import { Controller, Route, Get, Path, Security, Response } from 'tsoa';
import { EnrollmentTransaction } from '@enroll/carrier-portal/types';

@Route('transaction_management/enrollment_transactions')
export class EnrollmentTransactionsController extends Controller {
  /* eslint-disable @typescript-eslint/require-await*/
  @Get('{id}')
  @Security('BearerJWT')
  @Response('403', 'Access Denied', null)
  @Response('404', 'Not Found', null)
  public async showTransaction(
    @Path() id: string
  ): Promise<EnrollmentTransaction> {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      id: id,
      transaction_kind: '',
      raw_content: '',
      reference_identification: '',
      transaction_date: '',
      transaction_time: '',
      transmission_file_name: '',
      time_code: '',
      interchange_control_number: '',
      ack_state: '',
      ack_at: '',
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }
  /* eslint-enable @typescript-eslint/require-await */
}
