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
