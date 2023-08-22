const readline = require('readline');

const listener = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
listener.on('line', (username) => {
  console.log(`Your name is: ${username}`);
  listener.close();
});

listener.on('close', () => {
  console.log('This important software is now closing');
});

module.exports = listener;
