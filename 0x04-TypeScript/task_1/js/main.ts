interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0).toUpperCase();
  const fullName = `${initial}. ${lastName}`;
  return fullName;
}

interface StudentClassConstrustor {
  new (firstName: string, lastName: string); StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(); string {
    return 'Currently working';
  }

  displayName(): string;
  return this.firstName;
}

