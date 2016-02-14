/*
Return true if the string in the first element
of the array contains all of the letters of the string
in the second element of the array.
*/

function mutation(arr) {
    // Use the toLowerCase method to change the elements to lowercase
    // This is because the indexOf method is case-sensitive
    var firstElement = arr[0].toLowerCase();
    var secondElement = arr[1].toLowerCase();

    // Loop through the indexOf method
    // Until you get to the end of teh second element
    for (i = 0; i < secondElement.length; i++) {
        // Use indexOf to see if there are any characters that don't match up
        if (firstElement.indexOf(secondElement[i]) === -1) {
            return false;
        }
    }
    // If all the characters matched up
    // Break out of the for loop and return true
    return true;
}




mutation(["hello", "hey"]);
