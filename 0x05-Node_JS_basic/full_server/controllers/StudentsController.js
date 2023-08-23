const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByFields = await readDatabase('database.csv');
      const fields = Object.keys(studentsByFields).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );
      let response = 'This is the list of our students\n';

      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const students = studentsByFields[field];
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        
        if (i < fields.length - 1) {
          response += '\n'; // Add a newline after each field except the last one
        }
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();
      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentsByFields = await readDatabase('database.csv');
      const studentsInMajor = studentsByFields[major] || [];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
