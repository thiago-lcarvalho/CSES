const readline = require("readline");
const r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r.on("line", (n) => {
    const num = Number(n)
    if (num == 1) {
        console.log(1)
        return;
    }
    if (num < 4) {
        console.log('NO SOLUTION')
        return;
    }
    let ans = "2 4 1 3"
    for (let i = 5; i <= n; i++) {
        if (i % 2 == 0) {
            ans += " " + i
        }
        else if (i % 2 != 0) {
            ans = i + " " + ans
        }
    }
    console.log(ans)
    r.close()
});
