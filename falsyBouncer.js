/* Remove all falsy values from an array.
Falsy values in JavaScript are
false, null, 0, "", undefined, and NaN.
*/

// First way to do this
function bouncer(arr) {
    // Create a variable called filtered
    // Assign a filtered version of parameter 1 to it (arr).
    var filtered = arr.filter(beatIt);
    return filtered;

    function beatIt(value) {
        return Boolean(value);
    }
}
bouncer([7, 'ate', '', false, 9]);


// Second way to do this
/*
function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
*/

// Third way to do this
/*
function bouncer(arr) {
    return arr.filter(function(v) {
        return Boolean(v);
    });
}
bouncer([7, 'ate', '', false, 9]);
*/
