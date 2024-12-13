# 0x04-TypeScript

This project demonstrates how to use TypeScript with interfaces and build a small application using Webpack.

## Task 0: Creating an Interface for a Student

### Files

- `task_0/js/main.ts`: The main TypeScript file with the implementation.
- `task_0/package.json`: Configuration file for Node.js and npm scripts.
- `task_0/.eslintrc.js`: ESLint configuration.
- `task_0/tsconfig.json`: TypeScript compiler configuration.
- `task_0/webpack.config.js`: Webpack configuration.

## Task 1: Teacher Interface

### Description

This project demonstrates the use of TypeScript to create an interface for a `Teacher` object with required, optional, and dynamic properties.

### Requirements

The `Teacher` interface includes:

1. `firstName` (string): Read-only, modifiable only during initialization.
2. `lastName` (string): Read-only, modifiable only during initialization.
3. `fullTimeEmployee` (boolean): Always required.
4. `yearsOfExperience` (number): Optional.
5. `location` (string): Always required.
6. Additional properties can be added dynamically, like `contract` (boolean).

### Example Usage

```typescript
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
}

console.log(teacher3)
```

### Expected Output:

```Expected Output:
{
firstName: 'John',
lastName: 'Doe',
fullTimeEmployee: false,
location: 'London',
contract: false
}
```

### Files

- package.json: Specifies dependencies and scripts.
- tsconfig.json: TypeScript configuration.
- webpack.config.js: Webpack configuration.
- js/main.ts: Implementation of the Teacher interface and examples.
- .gitignore: Excludes unnecessary files (e.g., node_modules and dist) from version control.

## Task 1: Extending the Teacher Interface with Directors

### Description

This project demonstrates how to extend an interface in TypeScript. The `Directors` interface is created by extending the `Teacher` interface and introducing a new property, `numberOfReports`.

### Requirements

1. **Teacher Interface**:

   - `firstName` (string): Read-only, modifiable only during initialization.
   - `lastName` (string): Read-only, modifiable only during initialization.
   - `fullTimeEmployee` (boolean): Always required.
   - `yearsOfExperience` (number): Optional.
   - `location` (string): Always required.
   - Additional dynamic properties are allowed.

2. **Directors Interface**:
   - Extends the `Teacher` interface.
   - Includes an additional property: `numberOfReports` (number), which is always required.

### Example Usage

```typescript
// Define a Directors object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}

console.log(director1)
```

```Expected Output:
{
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
}

```

## Task 1: Printing Teachers

### Description

Creating a TypeScript function called `printTeacher` that formats a teacher's name and uses an interface named `printTeacherFunction` to enforce type safety and structure.

### Requirements

1. **Functionality**:

   - Accepts two arguments:
     - `firstName` (string): The teacher's first name.
     - `lastName` (string): The teacher's last name.
   - Returns a formatted string in the format: `<First letter of first name>. <Last name>`.

2. **Interface**:
   - An interface named `printTeacherFunction` is defined to describe the function's structure.

### Example Usage

```typescript
// Define the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`
}

// Example usage
console.log(printTeacher('John', 'Doe')) // Output: J. Doe
```

## Task 1: Writing a Class

### Description

This task involves creating a TypeScript class `StudentClass` that:

1. Accepts `firstName` and `lastName` as constructor arguments.
2. Implements two methods:
   - `workOnHomework`: Returns the string `"Currently working"`.
   - `displayName`: Returns the `firstName` of the student.

The structure of the class and its constructor is defined using TypeScript interfaces.

```
interface StudentClassInterface {
  firstName: string
  lastName: string
  workOnHomework(): string
  displayName(): string
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface
}

```

### Example Usage

```typescript
const student = new StudentClass('Miftah', 'Adem')
console.log(student.workOnHomework()) // output: Currently working
console.log(student.displayName()) // output: Miftah
```

## Task 2: Advanced Types Part 1

### Description

This task involves creating two interfaces (`DirectorInterface` and `TeacherInterface`) and their respective classes (`Director` and `Teacher`). A function named `createEmployee` determines whether to create a `Teacher` or `Director` instance based on the provided salary.

### Files Included

- js/main.ts: TypeScript implementation of interfaces, classes, and createEmployee function.
- package.json: Specifies dependencies and scripts.
- tsconfig.json: TypeScript configuration.
- webpack.config.js: Webpack configuration.
- .gitignore: Excludes unnecessary files.

### Features

1. **Interfaces**:

   - `DirectorInterface`: Defines methods for directors (`workFromHome`, `getCoffeeBreak`, `workDirectorTasks`).
   - `TeacherInterface`: Defines methods for teachers (`workFromHome`, `getCoffeeBreak`, `workTeacherTasks`).

2. **Classes**:

   - `Director`: Implements `DirectorInterface` with specific method outputs.
   - `Teacher`: Implements `TeacherInterface` with specific method outputs.

3. **Functionality**:
   - `createEmployee(salary: number | string)`: Creates a `Teacher` if the salary is a number less than 500, otherwise creates a `Director`.

### Example Usage

```typescript
console.log(createEmployee(200)) // Teacher instance
console.log(createEmployee(1000)) // Director instance
console.log(createEmployee('$500')) // Director instance
```

## Task 2: Creating functions specific to employees

### Description

This task extends the implementation of the Director and Teacher interfaces using Type Predicate.

### Features

1. **Functions**:

   - `isDirector`: Type predicate to determine if an employee is a `Director`.
   - `executeWork`: Executes work-specific methods for `Director` or `Teacher` instances.

2. **Usage Example**:

   ```typescript
   executeWork(teacher) // Getting to work
   executeWork(director) // Getting to director tasks
   ```

## Task 2: String literal types

### Description

This task focuses on using TypeScript's string literal types.

### Features

1. **Functions**:

   - `Subjects `: type that allows only `Math` or `History` as valid values.
   - `teachClass`: function returns `Teaching Math` if the input is `Math` and `Teaching History` if the input is `History`.

2. **Usage Example**:

   ```typescript
   console.log(teachClass('Math')) // Output: Teaching Math
   console.log(teachClass('History')) // Output: Teaching History
   ```

## Task 3: Ambient Namespaces

### Description

using ambient namespaces in TypeScript to define types for external JavaScript libraries and integrating them with strongly typed interfaces.

### Features

1. **interface.ts:** Defines the RowID type and RowElement interface.
2. **crud.js:** External JavaScript library for row operations.
3. **crud.d.ts:** Ambient TypeScript file with type declarations for crud.js.
4. **main.ts:** Main TypeScript file to demonstrate CRUD operations.

### Expected Output

```
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125

```
