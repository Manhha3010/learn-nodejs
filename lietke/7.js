const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, arr, result;

rl.question("", (answer) => {
  [n, k] = answer.split(" ").map(Number);
  arr = Array.from({ length: n }, (_, i) => i + 1);
  result = [];

  // Hàm quay lui liệt kê các tổ hợp chập k của mảng arr
  function backtrack(temp, start) {
    if (temp.length === k) {
      result.unshift(temp.slice());
      return;
    }

    for (let i = start; i < n; i++) {
      temp.unshift(arr[i]);
      backtrack(temp, i + 1);
      temp.shift();
    }
  }

  backtrack([], 0);

  // Sắp xếp kết quả và in ra màn hình
  result.sort((a, b) => (a.join(" ") > b.join(" ") ? 1 : -1)).reverse();
  result.forEach((r) => console.log(r.join(" ")));

  rl.close();
});
