const userObject = {
    userId: 331464621,
    userName: 'shlomi',
    age: 24,
   };

   const userObjectKeys = Object.keys(userObject);
   
   
   // ["userId", "userName", "age"]
   userObjectKeys.forEach((key) => {
    console.log(`key: ${key}, value: ${userObject[key]}`);
   });
   
  for(let  i in  userObject){
    console.log(`key: ${i}, value: ${userObject[i]}`);

  }
  
  