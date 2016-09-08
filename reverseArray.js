function reverseArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// -> ["C", "B", "A"];
