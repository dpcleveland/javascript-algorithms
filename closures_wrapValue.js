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
