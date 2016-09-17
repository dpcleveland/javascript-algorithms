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
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list) {
// INPUT -> {value: 10, rest: {value: 20, rest: {value: 30, null}}}
// OUTPUT -> [10, 20, 30]
    var array = [];

    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;

}

function prepend(element, prependList) {
// INPUT -> Element and a list
// OUTPUT -> New list that adds the element to the front of the input list

var list = {
    value: element,
    rest: prependList
};

return list;

}

function nth(nthList, number) {
// INPUT -> A list and a number
// OUTPUT -> The element at the given position in the list or undefined when there is no such element

    if (!nthList)
        return undefined;
    else if (number == 0)
        return nthList.value;
    else
        return nth(nthList.rest, number - 1);
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
