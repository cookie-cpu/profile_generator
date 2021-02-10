
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


rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (task) => {
    rl.question("What do you listen to while doing that? " ,(music) => {
      rl.question("Which meal is your fave? (Breakfast, lunch or dinner) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("In a few words, tell us what you are amazing at! ", (skill) => {
              console.log(`${name} loves listening to ${music} while doing ${task}, eating ${food} for ${meal}, they prefer ${sport} over other sports and are amazing at ${skill}`)
               rl.close();
            })
          })
        })
      })
    })  
  });
});




