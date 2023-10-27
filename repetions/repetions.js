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
