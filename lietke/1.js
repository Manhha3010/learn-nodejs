process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
  function binaryString(n) {
    let result = [];

    function backtrack(currentString, remainingLength) {
      if (remainingLength === 0) {
        result.push(currentString);
        return;
      }

      backtrack(currentString + "0", remainingLength - 1);
      backtrack(currentString + "1", remainingLength - 1);
    }

    backtrack("", n);
    return result;
  }
  //   console.log(binaryString(data).forEach((item) => console.log(item)));
  for (let i = 0; i < binaryString(data).length; i++) {
    console.log(binaryString(data)[i]);
  }
});
