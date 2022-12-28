var message = document.querySelector("#message");
var encryptionCode = document.querySelector("#encryptionCode");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var code = "JTREKYAVOGDXPSNCUIZLFBMWHQ";
function encrypt(userInput) {
    var encytedToNum = "";
    for (var i = 0; i < userInput.length; i++) {
        // check for space
        if (userInput[i] == " ") {
            encytedToNum += " ";
        }
        // check if letter is capital
        else if (userInput[i].toUpperCase() == userInput[i]) {
            encytedToNum += (userInput.charCodeAt(i) - 65).toString();
        }
        else {
            encytedToNum += (userInput.charCodeAt(i) - 97).toString();
            //   encytedToNum += "-";
        }
    }
    return encytedToNum;
}
function decrypt(userInput) {
    var encytedToNum = "";
    for (var i = 0; i < userInput.length; i++) {
        // check for space
        if (userInput[i] == " ") {
            encytedToNum += " ";
        }
        // check if letter is capital
        else if (userInput[i].toUpperCase() == userInput[i]) {
            encytedToNum += (userInput.charCodeAt(i) - 65).toString();
        }
        else {
            encytedToNum += (userInput.charCodeAt(i) - 97).toString();
            //   encytedToNum += "-";
        }
    }
    return encytedToNum;
}
console.log(" ".charCodeAt(0));
console.log(encrypt("encrypt this message"));
