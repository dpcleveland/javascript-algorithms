function numberGenerator() {
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number();
// -> 2
