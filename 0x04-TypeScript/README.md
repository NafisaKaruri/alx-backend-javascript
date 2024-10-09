# 0x04-TypeScript
This directory contains solutions to various tasks related to TypeScript as part of the ALX Backend JavaScript program.

## Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Tasks Overview

### 0. Creating an Interface for a Student
- **File:** task_0/js/main.ts
- **Description:** Defines a `Student` interface with properties: `firstName`, `lastName`, `age`, and `location`. Creates two student objects and renders a table displaying their first names and locations.

### 1. Let's Build a Teacher Interface
- **File:** task_1/js/main.ts
- **Description:** Creates a `Teacher` interface with properties `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience`, and `location`. Allows dynamic properties.

### 2. Extending the Teacher Class
- **File:** task_1/js/main.ts
- **Description:** Implements a `Directors` interface extending `Teacher`, adding a `numberOfReports` property.

### 3. Printing Teachers
- **File:** task_1/js/main.ts
- **Description:** Implements a function `printTeacher` that returns a formatted string for a teacher's name, along with an interface for the function.

### 4. Writing a Class
- **File:** task_1/js/main.ts
- **Description:** Defines a `StudentClass` with methods for working on homework and displaying the student's name.

### 5. Advanced Types Part 1
- **File:** task_2/js/main.ts
- **Description:** Creates interfaces for `Director` and `Teacher` with specific method implementations.

### 6. Creating Functions Specific to Employees
- **File:** task_2/js/main.ts
- **Description:** Implements functions to check employee types and execute their tasks accordingly.

### 7. String Literal Types
- **File:** task_2/js/main.ts
- **Description:** Defines a string literal type `Subjects` and implements a function to handle teaching classes.

### 8. Ambient Namespaces
- **File:** task_3/js/main.ts
- **Description:** Creates interfaces for database operations and implements ambient type declarations for CRUD operations.

### 9. Namespace & Declaration Merging
- **File:** task_4/js/main.ts
- **Description:** Implements namespaces and utilizes declaration merging for the `Teacher` interface.

### 10. Update Task for Subjects
- **File:** task_4/js/main.ts
- **Description:** Creates subject instances and demonstrates their methods in the console.

### 11. Brand Convention & Nominal Typing
- **File:** task_5/js/main.ts
- **Description:** Defines `MajorCredits` and `MinorCredits` interfaces and functions to sum their credits.

## Usage

To use any of the implemented classes and functions, import them into your TypeScript file. Here’s an example of how to use the `Student` interface:

```typescript
import { Student } from './task_0/js/main.ts';

const student: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'New York',
};
console.log(student.firstName); // Output: Jane
```
