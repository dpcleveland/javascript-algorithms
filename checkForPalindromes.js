// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    // Convert the string to lowercase
    var lowered = str.toLowerCase();

    // Replace all non alphanumeric values
    var cleaned = lowered.replace(/[^A-Za-z0-9]/g, '');

    // Create a new reversed variable
    // This allows us to compare to the normal string
    // We have to split it, reverse it, and join it back together
    var reversed = cleaned.split('').reverse().join('');

    // Test to see if the cleaned variable is the same as the reversed
    if (cleaned === reversed) {
        return true;
    } else {
        return false;
    }
}

palindrome("not a palindrome");
