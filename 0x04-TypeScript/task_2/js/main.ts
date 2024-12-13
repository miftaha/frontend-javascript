// 5. Advanced types Part 1

// creating DirectorInterface
interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

// creating TeacherInterface
interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

//Director Class
class Director implements DirectorInterface {
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
  workFromHome(): string {
    return 'Working from home'
  }
}

//Teacher Class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher()
  } else {
    return new Director()
  }
}

// Expected result:

console.log(createEmployee(200)) //Output: Teacher instance
console.log(createEmployee(1000)) //output: Director instance
console.log(createEmployee('$500')) //output: Director instance

// 6. Creating functions specific to employees
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks())
  } else {
    console.log(employee.workTeacherTasks())
  }
}

executeWork(createEmployee(200))
// Getting to work
executeWork(createEmployee(1000))
// Getting to director tasks

// 7. String literal types
type Subjects = 'Math' | 'History'

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  } else {
    return 'Teaching History'
  }
}

console.log(teachClass('Math'))
// Teaching Math
console.log(teachClass('History'))
// Teaching History
