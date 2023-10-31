// Solution:
// - If n = 1, then the answer is 1.
// - If n < 4, then there is no solution.
// - Create a fixed answer for n = 4.
// - For n > 4, create a loop that appends even numbers to the end and odd numbers to the beginning of the list.
// - Always creating a beautiful permutation.

const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r.on("line", (n) => {
    const num = Number(n);
    if (num == 1) {
        console.log(1);
        return;
    }
    if (num < 4) {
        console.log('NO SOLUTION');
        return;
    }
    let ans = "2 4 1 3";
    for (let i = 5; i <= n; i++) {
        if (i % 2 == 0) {
            ans += " " + i;
        } else if (i % 2 != 0) {
            ans = i + " " + ans;
        }
    }
    console.log(ans);
    r.close();
});
