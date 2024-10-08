# 0x03-ES6_data_manipulation
This directory contains solution to various tasks related to data manipulation in JavaScript using ES6 features, as part of the ALX Backend program.

## Tasks Overview

1. **Basic List of Objects**
   - **File:** `0-get_list_students.js`
   - **Description:** Implements a function `getListStudents` that returns an array of student objects with `id`, `firstName`, and `location`.

2. **More Mapping**
   - **File:** `1-get_list_student_ids.js`
   - **Description:** Creates a function `getListStudentIds` that returns an array of student IDs from a list of student objects, using the `map` function.

3. **Filter**
   - **File:** `2-get_students_by_loc.js`
   - **Description:** Implements `getStudentsByLocation` to return students located in a specified city, using the `filter` function.

4. **Reduce**
   - **File:** `3-get_ids_sum.js`
   - **Description:** Implements `getStudentIdsSum` that returns the sum of all student IDs using the `reduce` function.

5. **Combine**
   - **File:** `4-update_grade_by_city.js`
   - **Description:** Implements `updateStudentGradeByCity` to return an array of students from a specific city with updated grades, combining `filter` and `map`.

6. **Typed Arrays**
   - **File:** `5-typed_arrays.js`
   - **Description:** Implements `createInt8TypedArray` that creates a new `ArrayBuffer` with an `Int8` value at a specified position, throwing an error if the position is out of range.

7. **Set Data Structure**
   - **File:** `6-set.js`
   - **Description:** Implements `setFromArray` that returns a `Set` from a given array.

8. **More Set Data Structure**
   - **File:** `7-has_array_values.js`
   - **Description:** Implements `hasValuesFromArray` that checks if all elements in an array exist within a given set.

9. **Clean Set**
   - **File:** `8-clean_set.js`
   - **Description:** Implements `cleanSet` to return a string of all set values starting with a specified string, concatenated by a separator.

10. **Map Data Structure**
    - **File:** `9-groceries_list.js`
    - **Description:** Implements `groceriesList` that returns a map of grocery items with their quantities.

11. **More Map Data Structure**
    - **File:** `10-update_uniq_items.js`
    - **Description:** Implements `updateUniqueItems` that updates quantities of items in a map, changing those with a quantity of 1 to 100.

12. **Weak Link Data Structure**
    - **File:** `100-weak.js`
    - **Description:** Exports a `WeakMap` instance named `weakMap` and a function `queryAPI` that tracks the number of times it is called for each endpoint. If the count reaches 5, it throws an error indicating high load.

## Usage

To use any of the implemented functions, import them into your JavaScript file. Here’s an example of how to use the `getListStudents` function:

```javascript
import getListStudents from './0-get_list_students.js';

console.log(getListStudents());
```
## Running Tests
Eachc tasks comes with a corresponding main.js file that can be used to test the implementations. Use the following command to run a specific main file:

```bash
npm run dev [filename]
```

Replace `[filename]` with the name of the main file.
