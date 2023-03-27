let id = 1;
class Movie {
    private id:number
    constructor(private name:string, private date:string, private category:string) {
        this.id = id;
        id++;
    }

    getName() {
        return this.name
    }

    getCategory() {
        return this.category
    }

    getDate() {
        return this.date
    }

    getId() {
        return this.id
    }

    setName(name) {
        this.name = name
    }

    setCategory(category) {
        this.category = category
    }

    setDate(date) {
        this.date = date
    }
}