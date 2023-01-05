interface State {
    name: string;
    year:number;
    population:number;
}

const israel:State=
{name:"israel",
 year:1948,
 population:9000000}

 const india:State=
{name:"india",
 year:1947,
 population:10000000}

function whoIsOlder(object1:State, object2:State):string | false{
    try {
        if (object1.year < object2.year){
            return object1.name;
        } else if (object1.year > object2.year){
            return object2.name;
        } else {
            return "The states are established the same year."
        }
    } catch (error) {
       console.error(error); 
       return false;
    }
}

console.log("wich state established first?")
console.log (whoIsOlder(israel,india))
