class players {
    constructor(
      public name: string,
    ) {}
  }
  
  let player1 = new players(`X`)
  let player2 = new players(`O`)
  
  type Turn = "X" | "O" | ""
  let currentPlayer: players = player1 || player2;