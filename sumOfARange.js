function range(start, end, step) {

    // Return array containing all the numbers from start up to (and including) end.
    // Increment by the "step" value.
    // If no step value given, increment by 1.
    // Should work with negative step values.

    var myArray = [];

    if (start < end) {
        var step = (typeof step !== "undefined") ? step : 1;
        for (var i = start; i <= end; i += step) {
            myArray.push(i);
        }
    }
    else {
        var step = (typeof step !== "undefined") ? step : -1;
        for (var i = start; i >= end; i += step) {
            myArray.push(i);
        }
    }
    return myArray;
}
console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
// -> [1, 3, 5, 7, 9]
console.log(range(5, 2));
// -> [5, 4, 3, 2]
console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]


function sum(array) {

    // Return the sum of an array of numbers

    var total = 0;

    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;

}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// -> 55
