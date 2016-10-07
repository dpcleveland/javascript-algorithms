function sumAll(arr) {
    function getMinOfArray(arr) {
        return Math.min.apply(null, arr);
    }

    function getMaxOfArray(arr) {
        return Math.max.apply(null, arr);
    }

    var small = getMinOfArray(arr);
    var big = getMaxOfArray(arr);

    var newArr = [small, big];

    for (i = small + 1; i < big; i++) {
        newArr.push(i);
    }

    var total = newArr.reduce(function(a, b) {
        return a + b;
    }, 0);

    return total;
}

console.log(sumAll([1, 4]));
// should return 10.
console.log(sumAll([4, 1]));
// should return 10.
console.log(sumAll([5, 10]));
// should return 45.
console.log(sumAll([10, 5]));
// should return 45.
