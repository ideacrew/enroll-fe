/* eslint-disable @typescript-eslint/naming-convention */

// Comes from GET /transaction_management/enrollment_transactions/<transaction_id>
export interface EnrollmentTransaction {
  id: string;
  transaction_kind: string;
  raw_content: string;
  reference_identification: string;
  transaction_date: string;
  transaction_time: string;
  time_code: string;
  transmission_file_name: string;
  interchange_control_number: string;
}
