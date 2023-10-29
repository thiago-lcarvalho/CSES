const readline = require("readline");
const r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r.on("line", (n) => {
	r.on("line", (n2) => {
		const array = n2.split(" ").map(Number).slice(0, n);
        let answer = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                answer+= array[i - 1] - array[i]
                array[i] = array[i - 1]
            }
        }
		console.log(answer);
	});
});
