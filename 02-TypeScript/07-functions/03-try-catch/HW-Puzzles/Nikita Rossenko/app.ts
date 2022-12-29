// 1)
function multiplication() {
    try {
        const value1 = prompt("Please enter the first number:");
        if (value1) {
            if (isNaN(parseInt(value1))){
                throw new Error('Argument should be a number');
            }
        }
        else if (!value1){
            throw new Error('Argument should be a number');
        }

        const value2 = prompt("Please enter the second number:");
        if (value2) {
            if (isNaN(parseInt(value2))){
                throw new Error('Argument should be a number');
            }
        }
        else if (!value2){
            throw new Error('Argument should be a number');
        }

        const value3 = prompt("Please enter the third number:");
        if (value3) {
            if (isNaN(parseInt(value3))){
                throw new Error('Argument should be a number');
            }
        }
        else if (!value3){
            throw new Error('Argument should be a number');
        }

        if (value1 && value2 && value3){
            
            return parseInt(value1)*parseInt(value2)*parseInt(value3)
        }
    } catch (error) {
        console.error(error)
        return false
        
    }
}

console.log(multiplication())


// 2)
function encryptMessage(){
    try {
        const message = prompt("Please enter a message to encrypt: ");
        if(!message){
            throw new Error("must enter a message");
        } else {
            const encryptionDictionary = {
                a:1,b:2,c:3,d:4,e:5,f:6,
                g:7,h:8,i:9,j:10,k:11,l:12,m:13,
                n:14,o:15,p:16,q:17,r:18,s:19,t:20,
                u:21,v:22,w:23,x:24,y:25,z:26," ":27,
                A:28,B:29,C:30,D:31,E:32,F:33,
                G:34,H:35,I:36,J:37,K:38,L:39,M:40,
                N:41,O:42,P:43,Q:44,R:45,S:46,T:47,
                U:48,V:49,W:50,X:51,Y:52,Z:53,1:54,
                2:55,3:56,4:57,5:58,6:59,7:60,8:61,9:62,
                0:63,"!":64,"?":65
            };
            const messageChars = [...message];
            let encryptedMessage:string = "";
            for (const i in messageChars){
                let letter:string = messageChars[i]
                console.log(encryptionDictionary[letter])
                encryptedMessage = `${encryptedMessage}`+ encryptionDictionary[letter]+ " " ;
            }
            console.log(encryptedMessage)
        }
    } catch (error) {
        console.error(error);
    }
}

encryptMessage()
