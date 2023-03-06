const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (answer) => {
  const [n, k] = answer.split(" ").map(Number);
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  function permute(arr, k, temp, result, used) {
    if (temp.length === k) {
      // đã chọn đủ k phần tử
      result.push([...temp]); // lưu lại chỉnh hợp vào mảng kết quả
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue; // đã sử dụng phần tử này trước đó
      if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue; // tránh trường hợp trùng lặp
      used[i] = true; // đánh dấu phần tử đã sử dụng
      temp.push(arr[i]); // chọn phần tử vào chỉnh hợp
      permute(arr, k, temp, result, used); // quay lui để chọn phần tử tiếp theo
      temp.pop(); // bỏ phần tử vừa chọn ra khỏi chỉnh hợp
      used[i] = false; // hủy đánh dấu
    }
  }

  function combination(arr, k) {
    arr.sort((a, b) => a - b); // sắp xếp mảng ban đầu
    const result = [];
    const used = new Array(arr.length).fill(false);
    permute(arr, k, [], result, used);
    return result;
  }

  // Example usage:

  const result = combination(arr, k);
  const result1 = result.map((result) => result.join("  ")).join("\n");

  console.log(result1);
  rl.close();
});
