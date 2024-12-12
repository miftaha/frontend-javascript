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
    return 'Working from home'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
  workFromHome(): string {
    return 'Getting to director tasks'
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
