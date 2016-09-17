// Example of lists in JS
/*
var sampleList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

var sampleNewValue = {
    value: 0,
    rest: sampleList
};

console.log(sampleList);
console.log(sampleNewValue);
*/

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {

}

function prepend(element, prependList) {

}

function nth(nthList, number) {

}

console.log(arrayToList([1, 2, 3]));
// -> {value: 1, rest: {value: 2, rest: {value: 3, null}}}
console.log(arrayToList([10, 20]));
// -> {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// -> [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// -> {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// -> 20
