


interface State  {
    country:string;
    yearOfIndependentcy:number;
}

const india:State = {
    country:"india",
    yearOfIndependentcy:1947
}

const israel:State = {
    country:"israel",
    yearOfIndependentcy:1948
}

function early(obj1:State, obj2:State):string{
    if (obj1.yearOfIndependentcy > obj2.yearOfIndependentcy){
        return obj2.country;
    }
    else if (obj1.yearOfIndependentcy < obj2.yearOfIndependentcy){
        return obj1.country;
    }
    else {
        return "The independancy year is the same"
    }
}

console.log(early(india,israel))