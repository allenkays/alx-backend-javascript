const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';
  it('correct status code?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('correct status code when :id is a number?', (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct status code when :id is NOT a number (=> 404)?', (done) => {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('correct response', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      const parsedBody = JSON.parse(body);
      expect(parsedBody).to.deep.equal(expectedResponse);
      done();
    });
  });

  // Add more test cases for the /available_payments endpoint
});

describe('/login endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('correct response', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  // Add more test cases for the /login endpoint
});

