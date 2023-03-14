function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log("Divide and conquer: ", left, right);
  return merge(left, right);
}
function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
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
    const newArr = mergeSort(arr).reverse();
    const validNumbers = newArr.filter((num) => !isNaN(num));
    console.log(validNumbers.join(" "));
    rl.close();
  });
});
