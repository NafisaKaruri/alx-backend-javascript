// Define Teacher interface
export interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [index: string]: any,
}

// Define the Directors interface that extends Teacher
export interface Director extends Teacher {
  numberOfReports: number,
}

// Function to print teacher's name
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Define StudentClass interface for constructor
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define StudentClass interface for instance methods
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}
