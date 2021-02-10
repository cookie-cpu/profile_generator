
// What's your name? => profile.name
// What's an activity you like doing? => profile.task
// What do you listen to while doing that? => profile.music
// Which meal is your favourite (eg: dinner, brunch, etc.) => profile.meal
// What's your favourite thing to eat for that meal? => profile.food
// Which sport is your absolute favourite? => profile.sport
// What is your superpower? In a few words, tell us what you are amazing at! => profile.skill

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = {};


rl.question("What's your name? ", (name) => {
  profile.name = name;
  // TODO: Log the answer in a database
  console.log(`Thank you ${name}`);

  rl.close();
});


setTimeout(() => {
  console.log(profile)
  console.log(`${profile.name} loves listening to ${profile.music} while ${profile.task}, eating
  ${profile.food} for ${profile.meal}, they prefer ${profile.sport} over other sports and are great at
  ${profile.skill}`)
}, 3000);





