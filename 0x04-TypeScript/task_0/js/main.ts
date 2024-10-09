// Student interface
export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

// Two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'USA'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'UK',
};

// Array with the list of students
const studentsList: Array<Student> = [
  student1,
  student2,
];

// Renders a table of students using vanilla javascript
export const renderTable = (studentsList: Array<Student>): void =>  {
  // Create a new table element
  const table = document.createElement('table');

  // Create the first row with the table header
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // Create and insert header cells in the header row we just created
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  // Loop through the students list
  for (const student of studentsList) {
    // Create a new row for each student
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    
    // Add the row to the table
    table.insertAdjacentElement('beforeend', studentRow);
  }

  // Append the table to the doc body
  document.body.insertAdjacentElement('beforeend', table);
};

renderTable(studentsList);
