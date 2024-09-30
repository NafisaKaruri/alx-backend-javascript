export default function createIteratorObject(report) {
  const employee = [];

  for (const department of Object.values(report.allEmployees)) {
    employee.push(...department);
  }

  return employee;
}
