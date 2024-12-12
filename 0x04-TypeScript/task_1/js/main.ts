// Creating Teacher interface
interface Teacher {
  readonly firstName: string
  readonly lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
  [propName: string]: boolean | number | string | undefined
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
}

console.log(teacher3)

// 2. Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}

console.log(director1)

// 3. Printing teachers

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`
}

// Example usage
console.log(printTeacher('John', 'Doe')) // Output: J. Doe

// 4. Writing a class

interface StudentClassInterface {
  firstName: string
  lastName: string
  workOnHomework(): string
  displayName(): string
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName
  }
}

// Example

const student = new StudentClass('Miftah', 'Adem')
console.log(student.workOnHomework()) // output: Currently working
console.log(student.displayName()) // output: Miftah
