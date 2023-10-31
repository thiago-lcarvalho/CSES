// Solution:
// - Read two lines of input: n and n2.
// - Calculate the sum of numbers from 1 to n.
// - Parse n2 into an array of numbers.
// - Calculate the sum of the numbers in the array.
// - Calculate the answer by finding the difference between the expected sum and the actual sum.
// - Print the answer.

const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r.on("line", (n) => {
    r.on("line", (n2) => {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        const line = n2.split(" ");
        const numbers = line.map(Number);
        const newSum = numbers.reduce((partialSum, a) => partialSum + a, 0);
        const answer = sum - newSum;
        console.log(answer);
    });
});
