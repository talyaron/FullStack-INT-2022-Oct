

while(true){
    const deOrEncrypt:string|null= prompt(`do you wish to encrypt or decrypt`);
    const message:string|null = prompt(`enter what you wish to encrypt/decrypt`);
    if(deOrEncrypt == `decrypt`){
        if(message){
            alert(unJoeMachine(message))
        }
    }
    else{
        if(message){
        alert(joeMachine(message));
        }
    }
}

function joeMachine(unencryptedMsg:string):string{
    try{
        let encryptedMsg:any = [unencryptedMsg.length];
        console.log(typeof(encryptedMsg))
        for (let index = 0; index < unencryptedMsg.length; index++) {
           switch (index%8){
                case 1: 
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+5);
                    break;
                case 2:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-10);
                    break;
                case 3:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-3);
                    break;
                case 4:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+7);
                    break;
                case 5:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-5);
                    break;
                case 6:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+1);
                    break;
                default:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+3);
                    break; 

            }     
        }

        return encryptedMsg.join('');
    }
    catch{
        console.error(`unexpected input`)
        return `an unexpected error has occured please try again`
    }
}
function unJoeMachine(unencryptedMsg:string):string{
    try{
        let encryptedMsg:any = [unencryptedMsg.length];
        for (let index = 0; index < unencryptedMsg.length; index++) {
           switch (index%8){
                case 1: 
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-5);
                    break;
                case 2:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+10);
                    break;
                case 3:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+3);
                    break;
                case 4:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-7);
                    break;
                case 5:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)+5);
                    break;
                case 6:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-1);
                    break;
                default:
                    encryptedMsg[index] = String.fromCharCode(unencryptedMsg.charCodeAt(index)-3);
                    break; 

            }     
        }

        return encryptedMsg.join('');
    }
    catch{
        console.error(`unexpected input`)
        return `an unexpected error has occured please try again`
    }
}