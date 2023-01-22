class players {
    constructor(
      public name: string,
    ) {}
  }
  
  const player1 = new players(`X`)
  const player2 = new players(`O`)
  
  type Turn = "X" | "O" | ""
  let turn: players = player1