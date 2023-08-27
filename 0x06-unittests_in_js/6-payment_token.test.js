const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
    .then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API'});
      done();
    })
    .catch(done);
  });
});
