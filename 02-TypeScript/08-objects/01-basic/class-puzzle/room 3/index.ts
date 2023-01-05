interface State{
    name:string;
    yearOfIndetedice:number;
    continent:string;
    captial?:string;
}

const japen:State={
    name:"japen",
    yearOfIndetedice:1941,
    continent:"asia",
    
}

const holand:State={
    name:"holand",
    yearOfIndetedice:1948,
    continent:"asia",
    captial:"jerusalem"
}

function olderstate (state1:State,state2:State):string {
    try {
        const yearOfIndetedice= state1.yearOfIndetedice
        const yearOfIndetedice2=state2.yearOfIndetedice
        if(yearOfIndetedice < yearOfIndetedice2){
            return state1.name
        }else{
            return state2.name
        }
        
    } catch (error) {
        console.error(error)
        return "we have an error"
    }

}
const independice = olderstate(japen,holand)
console.log(independice)