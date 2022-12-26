
function reverseANumber (userNumberVar:Number|string|null):any{
    if (isNaN(userNumberVar)){
        return alert("This is not a number!")
    }    
    else {
      let userString:string= userNumberVar.toString();
      let stringLength:number= userString.length;
      let j=0;
      let oppArray:string[]=[];
      for (let i=stringLength-1;i>=0;i--){

        oppArray[j]=userString[i];
        j++;
      }
      
      let k:number=0;
      let numberOppArray:number[]=[];
      for (k=0;k<=stringLength-1;k++){
        numberOppArray[k]=parseInt(oppArray[k])
      }
      return (numberOppArray.join("")) ;
    } 
}
let userNumber=prompt("please write a number to be reversed");
console.log(`the reversed number is ${reverseANumber(userNumber)}`);


