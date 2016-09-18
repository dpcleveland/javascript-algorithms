// Compare each word in a string and return the longest one of them.

function findLongestWord(str) {
    // Set a variable that splits a string at spaces
    var breakDown = str.split(" ");

    // Set a temporary variable
    var max = 0;

    // Get the length of the breakdown variable
    var a = breakDown.length;

    // For loop to loop through the array of words one at a time
    // Each time, set the longest word as max, then try to beat it
    for (i = 0; i < a; i++) {
        if (breakDown[i].length > max) {
            max = breakDown[i].length;
        }
    }
    return max;



    //return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/* Alternate solution


function findLongestWord(str) {
  str = str.split(" ");
  var longest = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

*/
