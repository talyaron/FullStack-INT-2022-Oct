interface Country {
    name:string;
    yearOfDecleration:number;
}

const Israel:Country ={
    name:"israel",
    yearOfDecleration:1948,
}

const India:Country={
    name:"India",
    yearOfDecleration:1948,
}

function declerationSeniority(obj1:Country,obj2:Country):string{
    try{
        if(obj1.yearOfDecleration>obj2.yearOfDecleration){
        return obj2.name
        }
        else if (obj2.yearOfDecleration>obj1.yearOfDecleration){
        return obj1.name
        }
        else {
            return ("both seniority are the same")
        }
    }

    catch(error){
     console.error(error);
     return "we have some error"
    }
}

console.log(declerationSeniority(India,Israel))
