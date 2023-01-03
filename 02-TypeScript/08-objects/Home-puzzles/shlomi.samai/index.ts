interface Video {
    name:string,
    price:number,
    renter?:string,
  }
  
  interface User {
    name:string,
    age:number,
  }
  
  function pricOfVideo(obj:Video):number|false {
    try {
    console.log(obj.price*3.5)
    return obj.price*3.5
    }
    catch (error) {
      console.error("error")
      return false
    }
  }
  
  const TheCurrier:Video={
    name: "TheCurrier",
    price:50,
  }
  
  const userSelection=prompt("please select a movie")
  
  if (userSelection===null||userSelection===" ") {
    console.log("not a number")
  }
  else{
   const videoPrice=pricOfVideo(userSelection);
  }
  
  // function rentedVideo(videoName:string,userName:string):object{
  //   const RentedVideo:Video={
  //     name:videoName,
  //     renter:userName,
  //   }
  //   return RentedVideo
  // }