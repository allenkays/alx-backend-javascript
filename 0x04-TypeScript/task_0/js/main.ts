interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Nira',
  lastName: 'Wera',
  age: 10,
  location: 'Nakuru',
};

const student2: Student = {
  firstName: 'Sera',
  lastName: 'Kera',
  age: 15,
  location: 'Nairobi',
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement('table');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable();
