let temp = [1, 2, 7, 3, 4, 6, -1, 2, 4, -3, -3, -5, 1, 5, 6, 7, 5, 9, 2, 3, 6, 7, 8, 6, 3, 6, 7, 5, 6, 7, 1];
let min = 0;
let max = 0;
temp.forEach(() => {
    min = Math.min(...temp);
    max = Math.max(...temp);
});
console.log(min, max);