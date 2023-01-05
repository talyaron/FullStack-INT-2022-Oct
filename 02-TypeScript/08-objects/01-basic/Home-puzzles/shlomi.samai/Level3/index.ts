interface Video {
  name:string,
  price:number,
  renter?:string,
  listOfRenters: string[],
}

interface User {
  name:string,
  age:number,
  listOfVideos:string[],
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
function videoRenter (videoObj:Video, userObj:User):object|false {
try {
  videoObj.renter=userObj.name
  console.log(videoObj)
  return videoObj
}

catch (error) {
    console.error("error")
    return false
}

}

const TheCurrier:Video={
  name: "TheCurrier",
  price:50,
  listOfRenters:["Tom","Dudu"],
}

const Lorem1:Video={
  name: "TheCurrier",
  price:20,
  listOfRenters:["Tom","Dilan"],
}

const Lorem2:Video={
  name: "TheCurrier",
  price:30,
  listOfRenters:["Tom","Dave","Dan","Din"],
}


const Dudu:User={
  name: "Dudu",
  age:40,
  listOfVideos:["Lorem1","Lorem2"],
}

const Tom:User={
  name: "Tom",
  age:30,
  listOfVideos:["Lorem1","TheCurrier"],
}

const userSelectionVideo=prompt("please select a movie, the options are:TheCurrier,Lorem1,Lorem2")
const userSelectionUser=prompt("please select a user, the options are:Dudu,Tom")

if (userSelectionVideo===null||userSelectionUser===null||userSelectionVideo===" "||userSelectionUser===" ") {
  console.log("Not movie/User in the list, null or space")
  console.log(userSelectionVideo)
}
else if (TheCurrier.listOfRenters.includes(userSelectionUser)||Lorem1.listOfRenters.includes(userSelectionUser)|| Lorem2.listOfRenters.includes(userSelectionUser)
          && Dudu.listOfVideos.includes(userSelectionVideo)||Tom.listOfVideos.includes(userSelectionVideo) ){

        if (userSelectionVideo==="TheCurrier" && userSelectionUser==="Dudu") {
          const videoPrice=pricOfVideo(TheCurrier);
          const referenceObj=videoRenter(TheCurrier,Dudu); 
        }
        else if (userSelectionVideo==="TheCurrier" && userSelectionUser==="Tom") {
          const videoPrice=pricOfVideo(TheCurrier);
          const referenceObj=videoRenter(TheCurrier,Tom);
        }
        else if (userSelectionVideo==="Lorem1" && userSelectionUser==="Dudu") {
          const videoPrice=pricOfVideo(TheCurrier);
          const referenceObj=videoRenter(TheCurrier,Tom);
        }
        else if (userSelectionVideo==="Lorem1" && userSelectionUser==="Tom") {
          const videoPrice=pricOfVideo(TheCurrier);
          const referenceObj=videoRenter(TheCurrier,Tom);
        } 
        else if (userSelectionVideo==="Lorem2" && userSelectionUser==="Dudu") {
          const videoPrice=pricOfVideo(TheCurrier);
          const referenceObj=videoRenter(TheCurrier,Tom);
        } 
        else if (userSelectionVideo==="Lorem2" && userSelectionUser==="Tom") {
          const videoPrice=pricOfVideo(TheCurrier);
          const referenceObj=videoRenter(TheCurrier,Tom);
        } 
      } 
else{
 console.log("Not movie in the list")
 console.log(userSelectionVideo)
}