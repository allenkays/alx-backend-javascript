class Currency {
  constructor(code, name) {
    this._code = this.validateString(code);
    this._name = this.validateString(name);
  }

  validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Invalid type. Expected a string.');
    }
    return value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.validateString(value);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
