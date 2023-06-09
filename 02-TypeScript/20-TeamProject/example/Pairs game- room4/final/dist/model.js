class Player {
    constructor(name, date, file, score) {
        this.name = name;
        this.date = date;
        this.file = file;
        this.score = score;
        this.uid = uid();
    }
}
const players = [];
// players.push(new Player("shlomi",new Date('2023-09-24'),"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLzUgk9whjvWgo8rqMqCBlqG4Cepm2LSmx8fyrPkXqw&s",56))
