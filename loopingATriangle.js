// My solution
var result = "";

for (var row = 0; row < 7; row++) {
    do {
        result += "#";
        console.log(result);
    } while (result.length < row);
}

// Eloquent JavaScript's solution
/*
for (var line = "#"; line.length < 8; line += "#") {
    console.log(line);
}
*/
