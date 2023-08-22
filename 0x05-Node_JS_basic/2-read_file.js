const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').toString().split('\n');
    const lines = data.filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    students.forEach((student) => {
      const field = student[3].trim();
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
