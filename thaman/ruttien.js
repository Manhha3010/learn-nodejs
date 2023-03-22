const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function getInput() {
  let numTestCases = await new Promise((resolve) => {
    rl.question("", resolve);
  });
  for (let i = 1; i <= numTestCases; i++) {
    const moneyAmount = await new Promise((resolve) => {
      rl.question("", resolve);
    });
    const c = await new Promise((resolve) => {
      rl.question("", resolve);
    });

    calculateNotes(parseInt(moneyAmount), parseInt(c));
    if (i === parseInt(numTestCases)) rl.close();
  }
}
getInput();

function calculateNotes(moneyAmount, c) {
  const denominations = [1000, 2000, 3000, 5000];

  for (let j = 1; j <= c; j++) {
    const denomination = denominations[j - 1] * 10;
    denominations.push(denomination * 2 - denomination / 2);
    denominations.push(denomination * 5 - denomination);
  }

  denominations.sort((a, b) => b - a);

  let noteCount = 0;
  let totalAmount = 0;

  for (let j = 0; j < denominations.length; j++) {
    const noteDenomination = denominations[j];
    const noteCountToAdd = Math.floor(
      (moneyAmount - totalAmount) / noteDenomination
    );
    noteCount += noteCountToAdd;
    totalAmount += noteDenomination * noteCountToAdd;
    if (totalAmount === moneyAmount) break;
  }

  if (totalAmount === moneyAmount) {
    console.log(`${noteCount} ${c}`);
    return;
  } else {
    console.log(`0`);
  }
}
