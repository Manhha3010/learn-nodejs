function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  console.log(`Divide: ${left} --> ${mid} and ${mid + 1} --> ${right}`);

  console.log(
    ` ${arr.slice(left, mid + 1).join(" ")} :: ${arr
      .slice(mid + 1, right + 1)
      .join(" ")}`
  );
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
  console.log("\n");
}

function merge(arr, left, mid, right) {
  const tempArr = [];
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      tempArr.push(arr[i]);
      i++;
    } else {
      tempArr.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    tempArr.push(arr[i]);
    i++;
  }
  while (j <= right) {
    tempArr.push(arr[j]);
    j++;
  }
  for (let k = 0; k < tempArr.length; k++) {
    arr[left + k] = tempArr[k];
  }
  console.log(`Merge: ${left} --> ${mid} and ${mid + 1} --> ${right}`);
  console.log(` ${tempArr.join(" ")}`);
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
    mergeSort(validNumbers, 0, arrLength - 1);
    // console.log(validNumbers.join(" "));
    rl.close();
  });
});
