import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateAmount(amount);
    this._currency = this.validateCurrency(currency);
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this.validateAmount(value);
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this.validateCurrency(value);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // eslint-disable-next-line class-methods-use-this
  validateAmount(amount) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) {
      throw new Error('Amount must be a number.');
    }

    return amount;
  }

  // eslint-disable-next-line class-methods-use-this
  validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class.');
    }

    return currency;
  }
}
