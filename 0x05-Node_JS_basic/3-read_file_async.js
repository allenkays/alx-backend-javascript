const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'UTF-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        console.log('Number of students: 0');
        resolve();
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
      resolve();
    });
  });
}

module.exports = countStudents;
