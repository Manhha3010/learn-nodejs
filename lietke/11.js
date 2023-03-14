const readline = require("readline");

// Tạo đối tượng đọc dữ liệu từ bàn phím
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Tạo bàn cờ và danh sách các phương án
let board = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, () => false)
);
let solutions = [];

// Hàm kiểm tra vị trí (row, col) có thể đặt quân hậu hay không
function isSafe(board, row, col) {
  // Kiểm tra cột hiện tại
  for (let i = 0; i < row; i++) {
    if (board[i][col]) return false;
  }

  // Kiểm tra đường chéo trái trên
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Kiểm tra đường chéo phải trên
  for (let i = row, j = col; i >= 0 && j < 8; i--, j++) {
    if (board[i][j]) return false;
  }

  return true;
}

// Hàm đệ quy giải bài toán đặt 8 quân hậu trên bàn cờ
function solveQueens(board, row = 0) {
  if (row === 8) {
    // Tìm được một phương án, lưu vào danh sách
    solutions.push(board.map((row) => row.indexOf(true) + 1));
    return;
  }

  // Thử đặt quân hậu ở tất cả các cột của hàng hiện tại
  for (let col = 0; col < 8; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = true;
      solveQueens(board, row + 1);
      board[row][col] = false;
    }
  }
}

// Hàm chính
function main() {
  rl.question("Nhập vị trí của quân hậu (dòng cột): ", (input) => {
    // Xử lý dữ liệu đầu vào
    let [y, x] = input.split(" ").map((str) => parseInt(str));

    // Đặt quân hậu đầu tiên vào bàn cờ
    board[y - 1][x - 1] = true;

    // Giải bài toán và xuất kết quả
    solveQueens(board);

    solutions.forEach((solution) => console.log(solution.join(" ")));

    rl.close();
  });
}

// Chạy hàm chính
main();
