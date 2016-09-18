// Reverse a provided string, and return it as a string, reversed

function reverseString(str) {
    // split() returns an array on which reverse() and join() can be applied
    str = str.split('').reverse().join('');

    return str;
    //console.log(str);
}

reverseString("hello");
