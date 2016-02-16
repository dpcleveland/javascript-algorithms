/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(encodedStr) {
    var codeArr = encodedStr.split("");
    var decodedArr = [];
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];

    for(var i = 0; i < codeArr.length; i++) {
        if(alphabet.indexOf(codeArr[i]) === -1) {
            decodedArr.push(codeArr[i]);
        }
        else {
            for(var j = 0; j < alphabet.length; j++) {
                if(codeArr[i] === alphabet[j]) {
                    decodedArr.push(alphabet[j + 13]);
                }
            }
        }
    }

    return decodedArr.join("");
}

rot13("SERR PBQR PNZC");
