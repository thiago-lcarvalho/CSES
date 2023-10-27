var readline = require("readline");

var r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

r.on("line", function weirdAlgo(line) {
	console.log(line);
	for (let i = 0; i < 1; ) {
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
