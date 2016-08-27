var continueBreak = function() {
    for (current = 10; ; current++) {
        if (current == 11) {
            continue;
        }
        else if (current % 11 == 0) {
            return "it's divisible by 11 but not exactly 11\nand the value is " + current;
            break;
        }
    }
}
console.log(continueBreak());
