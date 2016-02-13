/* Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a two-dimensional array.
*/

function chunk(arr, size) {
    // Set up variables
    var temp = [];
    var i = 0;

    /*
    Do a loop while i is less than the length of arr
    Placeholder variable result
    Real variable that we're trying to get is temp
    Push the slice of the array to temp each loop
    The slice starts at i, and ends at i + size
    i += size also increments i at the same time
    */
    while (i < arr.length) {
        result = temp.push(arr.slice(i, i += size));
    }
    //console.log(temp);
    return temp;
}

chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 3);
chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
chunk([0, 1, 2, 3, 4, 5, 6], 3);
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
