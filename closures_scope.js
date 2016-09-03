var x = 10;

function fooScope() {
    var y = x + 5;
    return y;
}

function barScope() {
    var x = 2;
    return fooScope();
}

function main() {
    fooScope(); // Static scope: 15; Dynamic scope: 15
    barScope(); // Static scope: 15; Dynamic scope: 7
    return 0;
}
