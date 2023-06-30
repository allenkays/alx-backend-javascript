export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name);
    this._length = this.validateNumber(length);
    this._students = this.validateStudents(students);
  }

  validateString(value) {
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  validateNumber(value) {
    if (typeof this._length !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    return value;
  }

  validateStudents(value) {
    if (!Array.isArray(this._students) || !this._students.every((item) => typeof item === 'string')) {
      throw new TypeError(' Students must be an array of strings.');
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateNumber(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateStudents(value);
  }
}
