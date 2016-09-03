function subtractor(minusThis) {
    return function(value) {
        return value - minusThis;
    };
}

var subtracted = subtractor(5);
console.log(subtracted(3));
// -> -2
