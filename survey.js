const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite?', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower?', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1} \n ${answer1} like to ${answer2} and likes to ${answer3} and like to ${answer4}, like to eat ${answer5} \n ,but prefer to ${answer6}. \n her favorite need is ${answer7}`);
              rl.close();
            });
          });
        });
    });
  });
});
});
