function countBs(bString) {
    var total = 0;
    for (var i = 0; i < bString.length; i++) {
        if (bString.charAt(i) === "B") {
            total += 1;
        }
    }
    return total;
}

console.log(countBs("BBC"));


function countChar(anyString, char) {
    var total = 0;
    for (var i = 0; i < anyString.length; i++) {
        if (anyString.charAt(i) === char) {
            total += 1;
        }
    }
    return total;
}

console.log(countChar("kakkerlak", "k"));

// Combined closure
/*
function countBs(string) {
    return countChar(string, "B");
}
*/
