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

```output
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
