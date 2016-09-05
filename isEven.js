function isEven(number) {
    if (number === 0) {
        return true;
    }
    else if (number === 1) {
        return false;
    }
    else if (number < 0) {
        return isEven(-number);
    }
    else {
        return isEven(number - 2);
    }

}

/* Alternate answer with remainder operator
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else if (number % 2 === 1) {
        return false;
    }
    else {
        return isEven(number * -1);
    }
}
*/

console.log(isEven(50));
// -> true
console.log(isEven(75));
// -> false
console.log(isEven(-1));
// -> false
console.log(isEven(-2));
// -> true
