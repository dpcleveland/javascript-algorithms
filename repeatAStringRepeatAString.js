/*
Create a function that repeats a string (first parameter)
a set number of times (second parameter).
If the second parameter is negative it should simply return an empty string.
*/

function repeat(str, num) {
    // Create an empty variable
    var text = '';

    // Simple while loop that counts down from num
    // Each loop it adds the value of str to text
    // Then returns text when the loop finishes
    while (num > 0) {
        text += str;
        num--;

    }
    return text;
}

repeat("abc", 3);
