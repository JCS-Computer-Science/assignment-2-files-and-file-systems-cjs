const fs = require("fs");
const path = require("path");

function findMinMaxAvg(filePath) {
	let input = fs
		.readFileSync(filePath)
		.toString()
		.split("\n")
		.map((line) => Number(line));

	let min = input[0];
	let max = input[0];
	let sum = 0;
	input.forEach((num) => {
		if (num < min) {
			min = num;
		}
		if (num > max) {
			max = num;
		}
		sum += num;
	});

	let avg = sum / input.length;

	let fileName = path.basename(filePath);
	fs.writeFileSync(
		`${__dirname}/outputs/${fileName}`,
		`Min: ${min} Max: ${max} Avg: ${avg.toFixed(2)}`
	);
}
module.exports = {
	findMinMaxAvg,
};
