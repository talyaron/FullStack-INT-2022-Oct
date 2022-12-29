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

if (whoIsOlder(israel,india)!=="The states are established the same year."){
    console.log (`the state of ${whoIsOlder(israel,india)} established first.`);
} else {
    console.log (`The states are established the same year.`);
}
