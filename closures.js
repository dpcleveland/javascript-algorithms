// What happens to local variables when a function call that created them is no longer active?

function wrapValue(n) {
    var localVariable = n;

    return function() {
        return localVariable;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
// -> 1

console.log(wrap2());
// -> 2

/////////////////////////

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));
// -> 10

/////////////////////////

function subtractor(minusThis) {
    return function(value) {
        return value - minusThis;
    };
}

var subtracted = subtractor(5);
console.log(subtracted(3));
// -> -2

/////////////////////////

function numberGenerator() {
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number();
// -> 2

/////////////////////////

function sayHello() {
    var say = function() {
        console.log(hello);
    }
    var hello = "Hello, world!";
    return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure();
// -> Hello, world!

/////////////////////////
