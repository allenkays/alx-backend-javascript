Class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name);
    this._length = this.validateNumber(length);
    this.students = this.validateStudents(students);
  }
    validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Invalid type. Expected a string.');
    }
    return value;
  }

  validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Invalid type. Expected a number.');
    }
    return value;
  }

  validateStudents(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Invalid type. Expected an array of strings.');
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

export default HolbertonCourse;

}
