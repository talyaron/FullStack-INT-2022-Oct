interface State {
  YearOfIndependence: number;
  continent: string;
  name: string;
}
const Israel :State = {
    YearOfIndependence: 1948,
    continent: `asia`,
    name: `israel`,
};

const Narniya : State= {
    YearOfIndependence: 1950,
    continent: `wardrobe`,
    name: `Narniya`,
};
const usa : State= {
    YearOfIndependence: 1776,
    continent: `amrica`,
    name: `USA`,
}; 
function Older(obj:State,obj2:State) {
    try {
        if(obj.YearOfIndependence < obj2.YearOfIndependence){
            
            return obj.name;
        }else if (obj.YearOfIndependence > obj2.YearOfIndependence){
            
            return obj2.name;
        }else{
            return`even`;
        }
    } catch (error) {
        console.error(`wrong waedrobe`)
    }
}

const YearOfIndependence = Older(Israel,usa);
console.log(YearOfIndependence);
    
