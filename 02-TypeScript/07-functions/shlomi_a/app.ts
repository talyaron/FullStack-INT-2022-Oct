

function count(n:number):number {
  let sum=0;
   
    for (let i = 1; i <=n; i++) {
      for (let j = 1; j <=n; j++) {
        sum =sum+(i+j);
      }
    }
    return sum;
}


console.log(count(2));


