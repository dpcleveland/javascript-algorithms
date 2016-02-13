// Return the remaining elements from an array
// after stripping away n elements from it.

function slasher(arr, howMany) {
    // Set an empty array
    var removed = [];

    // Starting from the beggining of the array
    // Use the splice method to cut to howMany
    removed = arr.splice(0, howMany);

    //console.log(arr);
    //console.log(removed);
    return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
