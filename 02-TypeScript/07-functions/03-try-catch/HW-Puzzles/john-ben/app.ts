function Multiplication(x: any ,y:any ,z:any): number | false {
    try {
      if(isNaN(x) || isNaN(y) || isNaN(z)){
          throw new Error('Argument should be a number');
      }
      return x * y * z;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  const answer1 = prompt("give me a number please");
  const answer2 = prompt("give me a number please");
  const answer3 = prompt("give me a number please");
  
  const result = Multiplication(answer1,answer2,answer3);

  if (result && !isNaN(result)) {
    alert(`Your number returned as ${result}`);
  } else {
    alert("we have an error");
  }

