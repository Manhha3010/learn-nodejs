const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrLength;
let arr = [];

rl.on("line", (line) => {
  if (!arrLength) {
    arrLength = parseInt(line);
  } else {
    arr.push(parseInt(line));
    if (arr.length === arrLength) {
      const validNumbers = arr.filter((num) => !isNaN(num));
      if (arrLength === validNumbers.length) {
        validNumbers.forEach((num) => {
          const result = calculateNotes(1000 - num);
          console.log(result);
        });
        rl.close();
      }
    }
  }
});

function calculateNotes(moneyAmount) {
  const denominations = [500, 100, 50, 10, 5, 1];

  let count = 0;
  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    while (moneyAmount >= denomination) {
      moneyAmount -= denomination;
      count++;
    }
  }
  return count;
}
