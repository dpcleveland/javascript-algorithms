// Return the factorial of the provided integer.

function factorialize(num) {
    // If num is 0, just return 1 because that is 0!
    if (num === 0) {
        return 1;
    }

    // Otherwise do a recursion loop
    return num * factorialize(num - 1);

}

factorialize(5);
