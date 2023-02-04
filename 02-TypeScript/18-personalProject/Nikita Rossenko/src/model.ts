class User {
    username: string;
    password: string;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Movie {
    name: string;
    id: number;
    image: string;
    description: string;

    constructor(name, id, image, description) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.description = description;
    }
}

class MovieSeats {
    id: number;
    seats: Array<object>;

    constructor(id) {
        this.id = id;
        this.seats = [
            { 0: "" },
            { 1: "" },
            { 2: "" },
            { 3: "" },
            { 4: "" },
            { 5: "" },
            { 6: "" },
            { 7: "" },
            { 8: "" },
            { 9: "" },
            { 10: "" },
            { 11: "" },
            { 12: "" },
            { 13: "" },
            { 14: "" },
            { 15: "" },
            { 16: "" },
            { 17: "" },
            { 18: "" },
            { 19: "" },
            { 20: "" },
        ];
    }
}
