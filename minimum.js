// Example functionality
// console.log(Math.min(1, 1));

function minimum(val1, val2) {
    if (val1 < val2) {
        return val1;
    }
    else {
        return val2;
    }
}
console.log(minimum(0, 10));
// -> 0
console.log(minimum(0, -10));
// -> -10
console.log(minimum(1, 1));
// -> 1
