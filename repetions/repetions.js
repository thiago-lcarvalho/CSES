// Solution:
// - Read a single line of input: s.
// - Initialize a variable result to 1.
// - Initialize an index variable i to 0.
// - Iterate through the string s to find the longest consecutive character sequence.
// - Update the result with the maximum sequence length.
// - Print the result.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (s) => {
    let result = 1;
    let i = 0;
    while (i < s.length) {
        let count = 1;
        while (s[i] == s[i + 1]) {
            count++;
            i++;
        }
        result = Math.max(result, count);
        i++;
    }
    console.log(result);
});
