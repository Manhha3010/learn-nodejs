const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let matrix = [];
let minPath = Number.MAX_SAFE_INTEGER;
let minPathRoute = [];

rl.question("Nhap n: ", function (inputN) {
  n = parseInt(inputN);
  console.log(`Nhap ma tran khoang cach ${n} x ${n}:`);
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  let lineCount = 0;
  rl.on("line", function (line) {
    let values = line.trim().split(" ");
    for (let j = 0; j < n; j++) {
      matrix[lineCount][j] = parseInt(values[j]);
    }
    lineCount++;
    if (lineCount === n) {
      rl.close();
    }
  });
});

rl.on("close", function () {
  tsp(0, [0], 0, matrix, n);
  let i = 1;
  console.log(`Min total distance = ${minPath}`);
  for (let route of minPathRoute) {
    console.log("Solution ", i + ": ", route.join(" "));
    i++;
  }
});

function tsp(curCity, curPath, curCost, matrix, n) {
  if (curPath.length === n && matrix[curCity][0] !== 0) {
    curCost += matrix[curCity][0];
    if (curCost < minPath) {
      minPath = curCost;
      minPathRoute = [curPath.concat([0])];
    } else if (curCost === minPath) {
      minPathRoute.push(curPath.concat([0]));
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!curPath.includes(i) && matrix[curCity][i] !== 0) {
      tsp(i, curPath.concat([i]), curCost + matrix[curCity][i], matrix, n);
    }
  }
}
