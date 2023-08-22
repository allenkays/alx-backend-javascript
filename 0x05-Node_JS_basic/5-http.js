const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2); // Gets command line arguments

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School\n');
  } else if (req.url === '/students') {
    const databasePath = args[0]; // Get the path from command line

    countStudents(databasePath)
      .then(() => {
        const studentsList = fs.readFileSync(path.join(__dirname, 'database.csv'), 'utf-8');
        res.end(`This is the list of our students\n${studentsList}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
