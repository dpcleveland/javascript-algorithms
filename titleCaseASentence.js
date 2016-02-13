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
