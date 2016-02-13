// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
    // Variable to get the length of target
    var targetCharacters = target.length;

    // Variable to get the length of str
    var strCharacters = str.length;

    // Variable substracting the lengths of the two parameters
    // Then multiply by negative 1 to get a positive number
    var remainderLength = (targetCharacters - strCharacters) * (-1);

    // Get the substring
    var matched = str.substr(remainderLength, targetCharacters);

    if (matched === target) {
        return true;
    } else {
        return false;
    }
}

end("He has to give me a new name", "name");
