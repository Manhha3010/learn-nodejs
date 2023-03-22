const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrLength;
let arr;
let searchLength;
let searchArr;

rl.question("", (length) => {
  arrLength = parseInt(length);

  rl.question("", (inputArr) => {
    arr = inputArr.split(" ").map((x) => parseInt(x));
    const validNumbers = arr.filter((num) => !isNaN(num));
    console.log(findEarliestPartyDate(validNumbers));
    rl.close();
  });
});

function findEarliestPartyDate(arr) {
  arr.sort((a, b) => b - a);
  let latestDay = 0;
  for (let i = 0; i < arr.length; i++) {
    const day = arr[i] + i + 1;
    if (day > latestDay) {
      latestDay = day;
    }
  }
  return latestDay + 1;
}
