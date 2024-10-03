# 0x02-ES6 Classes
This directory contains solutions to various tasks related to ES6 classes in JavaScript as part of the ALX Backend JavaScript program.

## Tasks Overview

1. **ClassRoom**
   - **File:** `0-classroom.js`
   - **Description:** Implements a class named `ClassRoom` that accepts a single attribute, `maxStudentsSize`, which is stored as `_maxStudentsSize`.

2. **Initialize Rooms**
   - **File:** `1-make_classrooms.js`
   - **Description:** Imports the `ClassRoom` class and implements a function `initializeRooms` that returns an array of three `ClassRoom` objects with sizes 19, 20, and 34.

3. **Holberton Course**
   - **File:** `2-hbtn_course.js`
   - **Description:** Implements a class named `HolbertonCourse` with attributes `name`, `length`, and `students`, including getter and setter methods. Validates attribute types during object creation.

4. **Currency**
   - **File:** `3-currency.js`
   - **Description:** Implements a class named `Currency` with attributes `code` and `name`. Includes getter and setter methods and a method to display the full currency name.

5. **Pricing**
   - **File:** `4-pricing.js`
   - **Description:** Imports the `Currency` class and implements a class named `Pricing` with attributes `amount` and `currency`. It includes a method to display the full price and a static method for currency conversion.

6. **Building**
   - **File:** `5-building.js`
   - **Description:** Implements an abstract class named `Building` with an attribute `sqft`. Requires subclasses to implement a method `evacuationWarningMessage`.

7. **SkyHighBuilding**
   - **File:** `6-sky_high.js`
   - **Description:** Extends the `Building` class to create `SkyHighBuilding`, which includes attributes `sqft` and `floors`, and overrides the `evacuationWarningMessage` method.

8. **Airport**
   - **File:** `7-airport.js`
   - **Description:** Implements a class named `Airport` with attributes `name` and `code`. Provides a default string description of the airport.

9. **Holberton Class**
   - **File:** `8-hbtn_class.js`
   - **Description:** Implements a class named `HolbertonClass` with attributes `size` and `location`, which can be cast to Number and String.

10. **Hoisting**
    - **File:** `9-hoisting.js`
    - **Description:** Fixes a provided code snippet to properly create and manage instances of `HolbertonClass` and `StudentHolberton`.

11. **Car**
    - **File:** `10-car.js`
    - **Description:** Implements a class named `Car` with attributes `brand`, `motor`, and `color`, and includes a method `cloneCar` that creates a copy of the car.

12. **EVCar**
    - **File:** `100-evcar.js`
    - **Description:** Extends the `Car` class to create `EVCar`, which includes an additional attribute `range` and modifies the `cloneCar` method to return a `Car` instance.

## Usage

To use any of the implemented classes, import them into your JavaScript file. Here’s an example of how to use the `ClassRoom` class:

```javascript
import ClassRoom from './0-classroom.js';

const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // Output: 10
```

## Running Tests
Each task comes with a corresponding main.js file that can be used to test the implementations. Use the following command to run a specific main file:
```bash
npm run dev [filename]
```
