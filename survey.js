
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

// console.log(`${name} loves listening to ${music} while ${task}, eating
//       ${food} for ${meal}, they prefer ${sport} over other sports and are great at
//       ${skill}`);
//       rl.close();

// rl.question('Whats your name? ', (name) => {
//   rl.question('What music? ', (music) => {
//     rl.question("what task", (task) => {
//       rl.question("what meal", (meal) =>
//     }
      
//   });
// });

/*
console.log(`${profile.name} loves listening to ${profile.music} while ${profile.task}, eating
      ${profile.food} for ${profile.meal}, they prefer ${profile.sport} over other sports and are great at
      ${profile.skill}`)
      rl.close();
*/
rl.question('name : ', (name) => {
  rl.question('music : ', (music) => {
    rl.question("task:" ,(task) => {
      rl.question("food:", (food) => {
        rl.question("meal:", (meal) => {
          rl.question("sport:", (sport) => {
            rl.question("skill", (skill) => {
              console.log(`${name} loves listening to ${music} while ${task}, eating
              ${food} for ${meal}, they prefer ${sport} over other sports and are great at
              ${skill}`)
               rl.close();

            })
          })
        })
      })
    })  
  });
});


// setTimeout(() => {
//   //console.log(profile)
//   console.log(`${profile.name} loves listening to ${profile.music} while ${profile.task}, eating
//   ${profile.food} for ${profile.meal}, they prefer ${profile.sport} over other sports and are great at
//   ${profile.skill}`)
// }, 4000);


// rl.question('Please enter the first number : ', (answer1) => {
//   rl.question('Please enter the second number : ', (answer2) => {
//       var result = (+answer1) + (+answer2);
//       console.log(`The sum of above two numbers is ${result}`);
//       rl.close();
//   });
// });



