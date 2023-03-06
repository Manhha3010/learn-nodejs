const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (n) => {
  let used = new Array(parseInt(n) + 1).fill(false); // đánh dấu các số chưa được sử dụng
  let result = []; // mảng chứa các hoán vị

  function backtrack(current, perm) {
    if (current === parseInt(n)) {
      // nếu đã tạo được một hoán vị đầy đủ
      result.push(perm.slice()); // thêm hoán vị đó vào mảng kết quả
      return;
    }

    for (let i = 1; i <= parseInt(n); i++) {
      // duyệt qua các số từ 1 đến n
      if (!used[i]) {
        // nếu số chưa được sử dụng
        used[i] = true; // đánh dấu số đó đã được sử dụng
        perm.push(i); // thêm số đó vào hoán vị
        backtrack(current + 1, perm); // đệ quy tìm các hoán vị tiếp theo
        used[i] = false; // bỏ đánh dấu
        perm.pop(); // xóa số đã thêm
      }
    }
  }

  backtrack(0, []);

  const result1 = result
    .reverse()
    .map((result) => result.join("  "))
    .join("\n");

  console.log(result1);

  rl.close();
});
