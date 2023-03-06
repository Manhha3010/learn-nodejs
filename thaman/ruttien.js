const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numTestCases;
let i = 1;

rl.question("Nhap so luong test case: ", (answer) => {
  numTestCases = parseInt(answer);

  //   for (let i = 1; i <= numTestCases; i++) {
  //     rl.question(`Nhap tien can rut va cua c (test case ${i}): `, (testCase) => {
  //       let [moneyAmount, c] = testCase.split(" ").map(Number);

  //       calculateNotes(moneyAmount, c);

  //       // Đóng readline khi hoàn thành việc đọc dữ liệu đầu vào
  //       if (i === numTestCases) {
  //         rl.close();
  //       }
  //     });
  //   }
  while (i <= numTestCases) {
    rl.question(`Nhap tien can rut va cua c (test case ${i}): `, (testCase) => {
      let [moneyAmount, c] = testCase.split(" ").map(Number);

      calculateNotes(moneyAmount, c);

      // Đóng readline khi hoàn thành việc đọc dữ liệu đầu vào
      if (i === numTestCases) {
        rl.close();
      }
    });
    i++;
  }
});

function calculateNotes(moneyAmount, c) {
  const denominations = [1000, 2000, 3000, 5000];

  for (let j = 1; j <= c; j++) {
    const denomination = denominations[j - 1] * 10;
    denominations.push(denomination * 2 - denomination / 2);
    denominations.push(denomination * 5 - denomination);
  }

  denominations.sort((a, b) => b - a);

  let noteCount = 0;
  let totalAmount = 0;

  for (let j = 0; j < denominations.length; j++) {
    const noteDenomination = denominations[j];
    const noteCountToAdd = Math.floor(
      (moneyAmount - totalAmount) / noteDenomination
    );
    noteCount += noteCountToAdd;
    totalAmount += noteDenomination * noteCountToAdd;
    if (totalAmount === moneyAmount) break;
  }

  if (totalAmount === moneyAmount) {
    console.log(`${noteCount} ${c}`);
  } else {
    console.log(`0 ${c}`);
  }
}
