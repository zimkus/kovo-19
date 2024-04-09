const fs = require("fs");
const data = fs.readFileSync(process.argv[2]).toString().split(" ");

let min = data[0];
let max = data[0];
let minD = 1;
let maxD = 1;

data.forEach((d, i) => {
    if (d < min) {
        min = d;
        minD = i + 1;
    }
    if (d > max) {
        max = d;
        maxD = i + 1;
    }
});
console.log(`Min: ${min}, ${minD} diena Max: ${max}, ${maxD} diena`);