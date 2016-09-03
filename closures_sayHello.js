function sayHello() {
    var say = function() {
        console.log(hello);
    }
    var hello = "Hello, world!";
    return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure();
// -> Hello, world!
