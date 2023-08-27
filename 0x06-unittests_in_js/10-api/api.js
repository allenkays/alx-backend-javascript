const express = require('express');
const app = express();

const PORT = 7865;

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`)
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system')
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.json(paymentMethods);
});

app.post('/login', express.json(), (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});
