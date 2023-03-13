class User {
    username: string;
    password: string;
    movies:Array<object>;
    isAdmin:boolean;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.movies = []
        this.isAdmin = this.isNikita(username)
    }

    isNikita(username){
        if (username.toLowerCase() == 'nikita'){
            return true;
        } else {
            return false;
        }
    }
}

class Movie {
    name: string;
    id: number;
    image: string;
    description: string;
    category:string;

    constructor(name, id, image, description,category) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.description = description;
        this.category = category;
    }
}

class MovieSeats {
    id: number;
    seatsArray: Array<object>;

    constructor(id, seats) {
        this.id = id;
        this.seatsArray = this.seatsCount(seats);
    }
    seatsCount (seats) {
        const seatsArray:Array<object> = [{}]
        for (let i = 1 ; i <= seats ; i++){
            let seatObject = {seatNumber:i,selectedBy:'',isFree:true}
            seatsArray.push(seatObject);
        }
        return seatsArray;
    }
}
