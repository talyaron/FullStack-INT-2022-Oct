let userNumber=prompt("please write a number to be reversed");

function reverseANumber (userNumberVar:Number|string|null):number{
    if (isNaN(userNumberVar)){
        return alert("This is not a number!")
    }    
    else {
      let userString:string= userNumberVar.toString();
      let stringLength:number= userString.length;
      console.log(stringLength);
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

      //console.log(numberOppArray.join(""));
      return (numberOppArray.join("")) ;
    } 
}
console.log(reverseANumber(userNumber))


