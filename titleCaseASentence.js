// Change a string of text so that it always has
// a capital letter at the start of every word.

function titleCase(str) {
    // Change whole string to lowercase
    var lowered = str.toLowerCase();

    // Split into an array
    var split = lowered.split(' ');

    // Find the first letter in the array & caps it
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substr(1);
    }

    // Join it back together
    joined = split.join(' ');


    //console.log(joined);
    return joined;
}

titleCase("I'm a little tea pot");

/* Refactored

function titleCase(str) {
  var lower = str.toLowerCase();

  var splitStr = lower.split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

  }

  return splitStr.join(" ");
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

*/
