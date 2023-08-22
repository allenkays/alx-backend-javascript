const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentsByFields = {};

      for (const line of lines.slice(1)) {
        const fields = line.split(',');
        const firstname = fields[0].trim();
        const field = fields[3].trim();

        if (!studentsByFields[field]) {
          studentsByFields[field] = [];
        }
        studentsByFields[field].push(firstname);
      }

      resolve(studentsByFields);
    });
  });
}

module.exports = { readDatabase };
