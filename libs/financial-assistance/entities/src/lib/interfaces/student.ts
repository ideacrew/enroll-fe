interface NotStudent {
  isStudent: false | undefined;
}

interface Student {
  isStudent: true;
  studentKind: string;
  studentSchoolKind: string;
  studentStatusEndOn: Date;
}

export type StudentInformation = Student | NotStudent;
