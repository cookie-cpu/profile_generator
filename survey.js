const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = {};

rl.question("What's your name? ", (answer) => {
  profile.name = answer;
  // TODO: Log the answer in a database
  console.log(`Thank you ${answer}`);

  rl.close();
});

setTimeout(() => {
  console.log(profile)
}, 2000);



