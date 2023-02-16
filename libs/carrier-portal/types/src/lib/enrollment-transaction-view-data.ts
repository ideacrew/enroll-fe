/* eslint-disable @typescript-eslint/naming-convention */

// Comes from GET /transaction_management/enrollment_transactions/<transaction_id>
export type EnrollmentTransaction = {
  id: string;
  transaction_kind: string; // Need a string literal type for this
  raw_content: string;
  reference_identification: string;
  transaction_date: string;
  transaction_time: string;
  time_code: string;
  transmission_file_name: string;
  interchange_control_number: string;
  sender?: string;
  receiver?: string;
  ack_state: string;
  ack_at: string;
};
