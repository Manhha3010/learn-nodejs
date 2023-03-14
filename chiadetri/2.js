// Hàm tìm kiếm nhị phân trả về chỉ số của phần tử cần tìm trong mảng
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  let delta = -1;
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    delta = (target - arr[low]) / (arr[high] - arr[low]);
    position = low + Math.floor((high - low) * delta);
    if (arr[position] === target) {
      return position;
    }
    if (arr[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return -1;
}

// Hàm sắp xếp mảng giảm dần
function sortDescending(arr) {
  return arr.sort((a, b) => b - a).reverse();
}

// Đọc dữ liệu đầu vào từ bàn phím
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

    rl.question("", (length) => {
      searchLength = parseInt(length);

      searchArr = [];
      let count = 1;

      const searchLoop = () => {
        rl.question(``, (searchNum) => {
          searchArr.push(parseInt(searchNum));
          count++;

          if (count > searchLength) {
            // Đóng interface và bắt đầu chạy chương trình
            rl.close();

            // Sắp xếp mảng và in ra màn hình
            const sortedArr = sortDescending(arr);
            const validNumbers = sortedArr.filter((num) => !isNaN(num));
            console.log(validNumbers.join(" "));

            // Tìm kiếm từng phần tử trong mảng và in ra màn hình
            searchArr.forEach((num) => {
              const index = interpolationSearch(validNumbers, num);
              console.log(index !== -1 ? index : -1);
            });
          } else {
            searchLoop();
          }
        });
      };

      searchLoop();
    });
  });
});
