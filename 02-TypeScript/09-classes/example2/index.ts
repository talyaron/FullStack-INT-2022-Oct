const x = {a:2, b:"55"};
function uid(){
    return `id-${Math.random()*1000000000}`
}

class User{
    //preoperties
    
    id:string = uid();
    private score:number = 0;
    constructor(private name:string, public lastName:string){
        
    }



    get getName(){
        return this.name;
    }

    set setName(name:string){
        this.name = name
    }

    increaseScore(){
       
        let _score = this.score +34;
        _score = Math.log(_score);
        this.score = _score;
    }

}

const esti:User = new User("Esti", "Maoda");

console.log(esti);


const vika:User = new User("Vika", "Galperin");

vika.setName = "vika";

console.log(vika.getName);

vika.increaseScore();
console.log(vika)