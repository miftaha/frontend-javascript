interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student1: Student = {
  firstName: 'Miftah',
  lastName: 'Adem',
  age: 29,
  location: 'Ethiopia',
}
const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 28,
  location: 'Usa',
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table')
const tableBody = document.createElement('tbody')

studentsList.forEach((student) => {
  const row = document.createElement('tr')

  const nameCell = document.createElement('td')
  nameCell.textContent = student.firstName
  row.appendChild(nameCell)

  const locationCell = document.createElement('td')
  locationCell.textContent = student.location
  row.appendChild(locationCell)

  tableBody.appendChild(row)
})

table.appendChild(tableBody)
document.body.appendChild(table)
