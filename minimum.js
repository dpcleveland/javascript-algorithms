// Example functionality
// console.log(Math.min(1, 1));

function min(val1, val2) {
    if (val1 < val2) {
        return val1;
    }
    else {
        return val2;
    }
}
console.log(min(0, 10));
// -> 0
console.log(min(0, -10));
// -> -10
console.log(min(1, 1));
// -> 1
