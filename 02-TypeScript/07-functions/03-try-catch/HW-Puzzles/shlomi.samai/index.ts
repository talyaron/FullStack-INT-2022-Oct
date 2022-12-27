function multiply(x:number,y:number,z:number):number|false {
    try {
      if((typeof x !=='number')|| (typeof y !=='number') || (typeof z !=='number')){
        console.log(x);
        console.log(y);
        console.log(z);
        throw new Error("not a number")
        
      }
          return x*y*z
    }
     catch{
      return false
     } 
  }

  let inputA:string|null=prompt("please enter a number");
  let inputB:string|null=prompt("please enter a number");
  let inputC:string|null=prompt("please enter a number");
  console.log(inputA)
  
  if (isNaN(inputA)||isNaN(inputB)||isNaN(inputC)){
    console.log("not a number")
  }
  else if ((inputA=="")||(inputB=="")||(inputC=="")){
    console.log("number is null")
  }
  else {const result=multiply(parseInt(inputA),parseInt(inputB),parseInt(inputC))
  console.log(result)
  }