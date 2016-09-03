function secretPassword() {
    var password = 'xh38sk';
    return {
        guessPassword: function(guess) {
            if (guess === password) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

var passwordGame = secretPassword();
var wrong = passwordGame.guessPassword('heyisthisit'); // false
var correct = passwordGame.guessPassword('xh38sk'); // true
console.log(wrong);
console.log(correct);
