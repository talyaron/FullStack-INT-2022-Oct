class Player {
    uid: string;
    constructor(
      public name: string,
      public date: Date,
      public file:string,
      public score:number,
    ) {
      this.uid = uid();
    }
  }

  const players:Player[]=[];

// players.push(new Player("shlomi",new Date('2023-09-24'),"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLzUgk9whjvWgo8rqMqCBlqG4Cepm2LSmx8fyrPkXqw&s",56))


