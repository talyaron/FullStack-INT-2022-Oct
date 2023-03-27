interface state {
    name: string;
    capitalCity: string;
    population: number;
    YearOfIndependice: number;
    coinNane?: string;
    launguage?: string


}


const Israel: state = {
    name: "Israel",
    capitalCity: "jerusalem",
    population: 90000000,
    YearOfIndependice: 1948,
    coinNane: "shekel",
    launguage: "hebrow"

}
const Indya: state = {
    name: "Indya",
    capitalCity: "NewDelhi",
    population: 20000000000,
    YearOfIndependice: 1900,


}
function getTheOldestState(Israel: state, Indya: State): string|undefined {
    try {
        if (Israel.YearOfIndependice > Indya.YearOfIndependice) {
            return Indya.name
        }
        else if (Israel.YearOfIndependice < Indya.YearOfIndependice) {
            return Israel.name}

         } catch (error) {
        console.error(error)
        return undefined
    }}
    
    

     console.log ( `The bigest Stat is ${getTheOldestState(Israel,Indya )}`)