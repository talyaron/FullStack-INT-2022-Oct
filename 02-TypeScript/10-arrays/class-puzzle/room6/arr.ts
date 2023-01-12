// level 1

class people{
     public constructor(public name:string,public age:number){}
}
const ayala = new people('ayala',37);
const shlomi =new people ('shlomi',35);
const angela = new people('angela',21);
const tal = new people('tal',52);
const moshe = new people('moshe',78);

const avrg:people[]=[ayala,shlomi,angela,tal,moshe];

const averageAge= avrg.reduce((a,b)=> a + b.age,0 )/avrg.length;
console.log(`the average age is  ${averageAge}`);

// level 2

class Devlopers{
    public constructor(public salary:number,public jobTitle:string){}
}
const per1 = new Devlopers(10000, "qa");
const per2 = new Devlopers(17000,"senior devloper");
const per3 = new Devlopers(9700,"IT")

const allDevlopers:Devlopers[]=[per1,per2,per3]

function input ():Devlopers | false{
    try {
        let i = 0
        while(i <=10){
            const userJob = prompt("what is your job title?");
            const userSalary = prompt("what is your salary?");
            const pushInput = allDevlopers[i].salary;
            i++
            
        }
        return
    } catch (error) {
        console.error(error);
        return false;
    }
}

console.log(input())


// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]