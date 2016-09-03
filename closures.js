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

var result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function inner(x) {
    // additional enclosing context
    return function() {
      console.log(x);
    }
  })(i);
}

result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4

/////////////////////////
/*

var result = [];

for (let i = 0; i < 5; i++) {
  result[i] = function () {
    console.log(i);
  };
}

result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4
*/
/////////////////////////

function iCantThinkOfAName(num, obj) {
  // This array variable, along with the 2 parameters passed in,
  // are 'captured' by the nested function 'doSomething'
  var array = [1, 2, 3];
  function doSomething(i) {
    num += i;
    array.push(num);
    console.log('num: ' + num);
    console.log('array: ' + array);
    console.log('obj.value: ' + obj.value);
  }

  return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // closure #1
var bar = iCantThinkOfAName(6, referenceObject); // closure #2

foo(2);
/*
  num: 4
  array: 1,2,3,4
  obj.value: 10
*/

bar(2);
/*
  num: 8
  array: 1,2,3,8
  obj.value: 10
*/

referenceObject.value++;

foo(4);
/*
  num: 8
  array: 1,2,3,4,8
  obj.value: 11
*/

bar(4);
/*
  num: 12
  array: 1,2,3,8,12
  obj.value: 11
*/

/////////////////////////
