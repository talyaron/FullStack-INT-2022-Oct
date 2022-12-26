//level 1 1
//1.1
const x:number =123
function negativReturn(x:number):number{
    return (-x)
}
console.log(negativReturn(x))

//1.2

function squareNumber(x:number):number{
    return x**2
}
console.log(squareNumber(x))

//1.3
const Celsius:number=36.4
function Fahrenheit(Celsius:number):number{
    return Celsius*9/5+32
}
console.log(Fahrenheit(Celsius))

//level 2
//2.1
const y:number=123
function theLarger(x:number,y:number){
    if(x>y){
        return x}
      else if(x<y){ return y}
      else{return "Equals"}
    }
    console.log(theLarger(x,y))

//2.2

   
    let averegeMale=174
    let avaregeFemale=164

function averegeHeightoGender( userheight:number,usergender:string):number{
if(usergender==="male") 
    {   
           return averegeMale-userheight}
else {
    
    return avaregeFemale-userheight}
    
}
  

  let userheight=prompt("what is your height?");
 
  let usergender=prompt( "what is your gender ?");
  
  console.log(averegeHeightoGender(userheight,usergender))  


//level3

//function reverseNumbers( num:number):number{
    
//}
let num:number=4
for(i=1;i<num;i++){
   console.log(i)}