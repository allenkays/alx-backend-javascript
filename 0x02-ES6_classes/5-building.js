export default class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft);
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line  class-methods-use-this
  validateNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('sqft must be a number');
    }

    return value;
  }

  // eslint-disable-next-line  class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
