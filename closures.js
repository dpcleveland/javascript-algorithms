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

function outer() {
    var middle = function() {
        var inner = function() {
            console.log(hello);
        }
        return inner;
    }
    var hello = "Hello, world! This is a multi-closure.";
    return middle;
}
var middleClosure = outer();
var innerClosure = middleClosure();
innerClosure();
// -> Hello, world!

/////////////////////////

var x = 10;

function foo(a) {
    var b = 20;

    function bar(c) {
        var d = 30;
        return boop(x + a + b + c + d);
    }
    function boop(e) {
        return e * -1;
    }

    return bar;
}

var moar = foo(5);
console.log(moar(15));
// -> -80

/////////////////////////

var x = 10;

function fooScope() {
    var y = x + 5;
    return y;
}

function barScope() {
    var x = 2;
    return fooScope();
}

function main() {
    fooScope(); // Static scope: 15; Dynamic scope: 15
    barScope(); // Static scope: 15; Dynamic scope: 7
    return 0;
}

/////////////////////////
