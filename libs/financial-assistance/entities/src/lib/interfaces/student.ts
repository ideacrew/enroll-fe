/* eslint-disable @typescript-eslint/naming-convention */
interface NotStudent {
  is_student: false | undefined;
}

interface Student {
  is_student: true;
  student_kind: StudentKind;
  student_school_kind: StudentSchoolKind;
  student_status_end_on: string; // Date
}

export type StudentInformation = Student | NotStudent;

export const student = [
  'dropped_out',
  'elementary',
  'english_language_institute',
  'full_time',
  'ged',
  'graduated',
  'graduate_school',
  'half_time',
  'junior_school',
  'not_in_school',
  'open_university',
  'part_time',
  'preschool',
  'primary',
  'secondary',
  'technical',
  'undergraduate',
  'vocational',
  'vocational_tech',
] as const;

export type StudentKind = typeof student[number];

export const studentSchool = [
  'english_language_institute',
  'elementary',
  'equivalent_vocational_tech',
  'graduate_school',
  'ged',
  'high_school',
  'junior_school',
  'open_university',
  'pre_school',
  'primary',
  'technical',
  'undergraduate',
  'vocational',
];

export type StudentSchoolKind = typeof studentSchool[number];
