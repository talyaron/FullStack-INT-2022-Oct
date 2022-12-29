while (true) {
    var deOrEncrypt = prompt("do you wish to encrypt or decrypt");
    var message = prompt("enter what you wish to encrypt/decrypt");
    if (deOrEncrypt == "decrypt") {
        alert(unJoeMachine(message));
    }
    else {
        if (message) {
            alert(joeMachine(message));
        }
    }
}
function joeMachine(unencryptedMsg) {
    //ong no cap i have no idea why it has an err
    var encryptedMsg = [unencryptedMsg.length];
    console.log(typeof (encryptedMsg));
    //i have no idea what kind of error can occur so i dont know what try/catch thing to put also the name joe machine does have meaning and i wont explain why
    for (var index = 0; index < unencryptedMsg.length; index++) {
        switch (index % 8) {
            case 1:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 5);
                break;
            case 2:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 10);
                break;
            case 3:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 3);
                break;
            case 4:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 7);
                break;
            case 5:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 5);
                break;
            case 6:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 1);
                break;
            default:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 3);
                break;
        }
    }
    return encryptedMsg.join('');
}
function unJoeMachine(unencryptedMsg) {
    var encryptedMsg = [unencryptedMsg.length];
    console.log(typeof (encryptedMsg));
    for (var index = 0; index < unencryptedMsg.length; index++) {
        switch (index % 8) {
            case 1:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 5);
                break;
            case 2:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 10);
                break;
            case 3:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 3);
                break;
            case 4:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 7);
                break;
            case 5:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) + 5);
                break;
            case 6:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 1);
                break;
            default:
                encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index) - 3);
                break;
        }
    }
    return encryptedMsg.join('');
}
