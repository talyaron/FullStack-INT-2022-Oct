var message = document.querySelector("#message");
var encryptionCode = document.querySelector("#encryptionCode");
var output = document.querySelector("#output");
var encryptCheckbox = document.querySelector("#encrypt");
var decryptCheckbox = document.querySelector("#decrypt");
// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const encryption_Code = "JTREKYAVOGDXPSNCUIZLFBMWHQ";
function encrypt(userInput) {
    try {
        var encytedToNum = "";
        for (var i = 0; i < userInput.length; i++) {
            // check for space
            if (userInput[i] == " ") {
                encytedToNum += "- ";
            }
            // check if letter is capital
            else if (userInput[i].toUpperCase() == userInput[i]) {
                encytedToNum += (userInput.charCodeAt(i) - 65).toString();
                encytedToNum += " ";
            }
            else {
                encytedToNum += (userInput.charCodeAt(i) - 97).toString();
                encytedToNum += " ";
            }
        }
        return encytedToNum;
    }
    catch (error) {
        return console.error(error);
    }
}
function decrypt(encryptedMessage) {
    try {
        var decryptBackToString = "";
        //convert code string to an array
        var textArr = encryptedMessage.split(" ");
        for (var i = 0; i < textArr.length; i++) {
            if (textArr[i] == "-") {
                decryptBackToString += " ";
            }
            else if (textArr[i] == "") {
                decryptBackToString += "";
            }
            else {
                decryptBackToString += String.fromCharCode(parseInt(textArr[i]) + 65);
            }
        }
        return decryptBackToString;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
window.addEventListener("keydown", function (e) {
    e.preventDefault;
    if (e.key == "Enter") {
        if (message.value.length > 5 && message.value != "") {
            if (encryptCheckbox.checked &&
                !decryptCheckbox.checked &&
                !/\d/.test(message.value)) {
                output.textContent = encrypt(message.value);
                message.value = '';
            }
            else if (!encryptCheckbox.checked &&
                decryptCheckbox.checked &&
                /\d/.test(message.value)) {
                output.textContent = decrypt(message.value);
                message.value = '';
            }
            else {
                output.textContent = "Value input isn't correct (make sure you check the correct checkbox)";
            }
        }
    }
});
console.log(encrypt("Encrypt This MeSsage"));
console.log(decrypt(encrypt("Encrypt This MeSsage")));
