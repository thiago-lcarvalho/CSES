const readline = require("readline");
const r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r.on("line", (n) => {
	r.on("line", (n2) => {
		sum = 0;
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
