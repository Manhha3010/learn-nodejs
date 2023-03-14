const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, arr, result;

rl.question("", (answer) => {
  const number = parseInt(answer);
  function nQueens(n) {
    let queens = new Array(n); // Lưu trữ vị trí của các quân hậu

    // Kiểm tra xem có thể đặt quân hậu vào ô (r, c) hay không
    function canPlace(r, c) {
      for (let i = 0; i < r; i++) {
        if (
          queens[i] == c ||
          queens[i] - i == c - r ||
          queens[i] + i == c + r
        ) {
          return false;
        }
      }
      return true;
    }

    // Tìm lời giải bắt đầu từ dòng row
    function solve(row) {
      if (row == n) {
        // Đã đặt quân hậu lên dòng cuối cùng
        console.log(`Solution ${count}: ${queens.map((q) => q + 1).join(" ")}`);
        count++;
        return;
      }
      for (let col = 0; col < n; col++) {
        if (canPlace(row, col)) {
          // Có thể đặt quân hậu vào ô (row, col)
          queens[row] = col;
          solve(row + 1);
        }
      }
    }

    let count = 1;
    solve(0); // Tìm lời giải bắt đầu từ dòng 0
  }

  // Ví dụ: tìm lời giải cho bàn cờ 8x8
  nQueens(number);

  rl.close();
});
