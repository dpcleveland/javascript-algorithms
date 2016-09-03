function outer() {
    var middle = function() {
        var inner = function() {
            console.log(hello);
        }
        return inner;
    }
    var hello = "Hello, world! This is a multi-closure.";
    return middle;
}
var middleClosure = outer();
var innerClosure = middleClosure();
innerClosure();
// -> Hello, world!
