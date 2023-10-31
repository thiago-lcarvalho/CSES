// Solution:
// - Read a single line of input: line.
// - Initialize result to 1.
// - Initialize i to 0.
// - Use a while loop to perform the "Weird Algo" operation until line becomes 1.
// - Print each step of the operation.

const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

r.on("line", function weirdAlgo(line) {
    console.log(line);
    for (let i = 0; i < 1;) {
        if (line % 2 == 0) {
            line = line / 2;
            console.log(line);
        } else if (line % 2 != 0 && line != 1) {
            line = line * 3 + 1;
            console.log(line);
        }
        if (line == 1) {
            i++;
        }
    }
});
