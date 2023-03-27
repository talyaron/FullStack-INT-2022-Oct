class people{
   public constructor(public name:string,public age:number, public gender:string){}
}
const luna = new people ('luna', 21,'female');
const mike = new people ('mike',30,'male');
const bob = new people ('bob',14,'male');

const arr:people[]=[luna,mike,bob];
arr.sort((a,b)=> a.age - b.age);
console.log(arr)
// filter op1
const gender:people[] = arr.filter((people)=>people.gender === "male");
console.log(gender)
// filter op2 -- without a variable--
console.log(arr.filter((people)=>people.gender === "female"))