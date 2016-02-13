/*
Truncate a string so that if it exceeds a specific length
it will be cut off and have three dots at the end.
The three dots also counts toward the overall string length,
so they'll have to be accounted for.
*/

function truncate(str, num) {

    // Find the length of the string
    var strLength = str.length;

    // Nested for loop
    if (strLength > num) {
        if (num > 3) {
            var slicedLong = str.slice(0, (num - 3));
            return slicedLong + "...";
        } else {
            var slicedShort = str.slice(0, (num));
            return slicedShort + "...";
        }
    } else {
        return str;
    }
}

truncate("A-", 1);
