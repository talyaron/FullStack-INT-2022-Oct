interface Display {
    bindHandler(clickHandler: (row: number, col: number) => void): void
    createElement(tag: string, className?: string, dataset?: Array<any>): HTMLElement
    getElement(selector: string): HTMLElement
    getAllElements(selector: string): NodeList
    printGameBoard(boardData: Array<Array<string>>): void
    updateBoard(row: number, col: number, currentPlayer: string): void
    clearGameBoard(): void
    printScoreBoard(scoreData: Score): void
    updateScore(currentScore: Score, currentPlayer: string): void
    printMessage(winner?: string): void
    clearMessage(): void
    newGame():void
    
  }

  // Start Game
//==============================================================================

const ticTacToe = new TicTacToe(new DOMDisplay())
ticTacToe.startGame()


