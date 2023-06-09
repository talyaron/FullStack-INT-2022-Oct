

class Dates {
    constructor(public day:number, public month:number, public year:number, public hour:number, public minute:number, public second:number){}
    date = function findDate(){
        return `${this.day}/${this.month}/${this.year} ${this.hour}:${this.minute}:${this.second}`    
    } 
    secondsFromDate = function timeElapsed(){
        const inputDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second)
        const secondsElapsed = (clientDate.getFullYear()-inputDate.getFullYear())*365*24*3600+ (clientDate.getMonth()- inputDate.getMonth())*30*24*3600 +(clientDate.getDay()- inputDate.getDay())*24*3600 + (clientDate.getHours()-inputDate.getHours())*3600 + (clientDate.getMinutes()-inputDate.getMinutes())*60 + clientDate.getSeconds()- inputDate.getSeconds();
        if(secondsElapsed<0){
            return `the date is in ${secondsElapsed*-1}`
        }
        else{
            return `${secondsElapsed} seconds have passed since that date`
        }
    }
}
const clientDate = new Date();
const joeDay = new Dates(20, 1, 2021, 4, 23, 12);
console.log(joeDay.date());
console.log(joeDay.secondsFromDate());

