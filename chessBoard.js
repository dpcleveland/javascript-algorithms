// My solution
var board = "";
var size = 10;

for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if ((i + j) % 2 == 0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);

// Eloquent JavaScript solution is pretty much the same
// They just used different var names and started at 0 instead of 1
