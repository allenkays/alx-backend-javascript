const readline = require('readline');

const program = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');
program.on('line', (username) => {
  console.log(`Your name is: ${username}`);
  program.close();
});

program.on('close', () => {
  console.log('This important software is now closing')
});
