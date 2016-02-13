// Extract the largest number from each sub-array in a multidimensional array.

function largestOfFour(arr) {
    // Set an empty array
    var result = [];

    // For loop that repeats while i is less than the length of the given array
    for (var i = 0; i < arr.length; i++) {
        // Set a temporary variable
        var max = 0;

        // Set a temp variable to find the number in the inner array at position i
        var inner = arr[i];

        // Another for loop to actually do the work on the inner arrays
        for (var j = 0; j < inner.length; j++) {
            if (inner[j] > max)
                max = inner[j];
        }
        result.push(max);
    }
    return result;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

/*
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

*/
