const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.question("", (answer) => {
  n = parseInt(answer);

  rl.question("", (answer) => {
    arr = answer.split(" ").map(Number);

    function permutation(n, nums) {
      let visited = Array(n).fill(false);
      let permutation = [];

      function backtrack() {
        if (permutation.length === n) {
          console.log(permutation.join(" "));
          return;
        }

        for (let i = 0; i < n; i++) {
          if (!visited[i]) {
            visited[i] = true;
            permutation.push(nums[i]);
            backtrack();
            visited[i] = false;
            permutation.pop();
          }
        }
      }

      backtrack();
    }

    // Example
    permutation(n, arr);

    rl.close();
  });
});
