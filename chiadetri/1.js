// Hàm tìm kiếm nhị phân trả về chỉ số của phần tử cần tìm trong mảng
function binarySearch(arr, target) {
  const sortedArr = Array.from(arr).sort((a, b) => b - a);
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + high);
    const element = sortedArr[mid];
    if (element < target) {
      low = mid + 1;
    } else if (element > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// Hàm sắp xếp mảng giảm dần
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
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
            console.log(sortedArr.join(" "));

            // Tìm kiếm từng phần tử trong mảng và in ra màn hình
            searchArr.forEach((num) => {
              const index = binarySearch(sortedArr, num);
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
