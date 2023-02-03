# learn-nodejs

Read and Write input from keyboard

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
data = data.toString().toUpperCase();
process.stdout.write(data + "\n");
console.log(data + "\n");
});
