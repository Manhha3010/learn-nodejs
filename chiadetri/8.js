function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const pivot = arr[left];
  let i = left + 1,
    j = right;
  console.log(`Partitioning: left=${left}, right=${right}`);
  console.log(arr.slice(left, right + 1).join(" "));
  while (i <= j) {
    while (i <= j && arr[i] <= pivot) {
      i++;
    }
    while (i <= j && arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      console.log(arr.slice(left, right + 1).join(" "));
    }
  }
  [arr[left], arr[j]] = [arr[j], arr[left]];
  console.log(arr.slice(left, right + 1).join(" "));
  quickSort(arr, left, j - 1);
  quickSort(arr, j + 1, right);
}

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
    console.log(validNumbers.join(" "));
    quickSort(validNumbers, 0, arrLength - 1);
    console.log(validNumbers.join(" "));
    rl.close();
  });
});
