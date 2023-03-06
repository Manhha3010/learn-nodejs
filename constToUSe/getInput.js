const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function getInput() {
  let name = await new Promise((resolve) => {
    rl.question("What's your name? ", resolve);
  });

  const age = await new Promise((resolve) => {
    rl.question("What's your age? ", resolve);
  });

  const city = await new Promise((resolve) => {
    rl.question("What's your city? ", resolve);
  });

  console.log(
    `Your name is ${name}, your age is ${age}, and you live in ${city}.`
  );
  const sum = name + age + city;
  name = parseInt(name);
  console.log("typeof", typeof name);
  console.log("sum = ", sum);
  rl.close();
}

getInput();
