// Simple array reversal
function reverseArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// -> ["C", "B", "A"];

/*
// Eloquent JavaScript's answer

function reverseArray(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}
*/

// Reverse an array in place

function reverseArrayInPlace(array) {
    var halfLength = Math.floor(array.length / 2);

    for (var i = 0; i < halfLength; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// -> [5, 4, 3, 2, 1]
