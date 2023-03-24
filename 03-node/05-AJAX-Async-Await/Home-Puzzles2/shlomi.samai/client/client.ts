import e from "express";

//data
interface soccerPlayer {
    name:string;
    src:string;
}

function hendlegetplayers(ev){
try {
    fetch("/api/get-players")
    .then((res)=>{res.json()})
    .then(({players})=>{
        try {
            if(!players) throw new Error("couldnt get players")
        } catch (error) {
            console.error(Error)
        }
    })
} catch (error) {
    
}
}