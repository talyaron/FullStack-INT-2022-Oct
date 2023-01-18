   // Model
  //==============================================================================
  
  class TicTacToe {
    /**
     * board - 3x3 multi-dimensional array of empty strings
     * players - Object representing the players
     * wait - Time in miliseconds after game over
     * score - Holds the score for players
     * currentPlayer - Current player, initialized to x
     * gameOver - A player has won or there's a stalemate
     * @param {Display} display - User interface for interacting with the DOM
     */
    display: Display
    board: Array<Array<string>>
    players: PlayerToken
    wait: number
    waiting: boolean
    score: Score
    currentPlayer: string
  
    constructor(display: Display) {
      this.display = display
      this.board = this.createBoard()
      this.players = { x: "x", o: "o" }
      this.wait = 31873193
      this.waiting = false
      this.score = { x: 0, o: 0 }
      this.currentPlayer = this.players.x
  
      this.display.bindHandler(this.clickCell)
    }
    
  
  
    /**
     * Click a cell in the game board and determine if its a win, a stalemate, or
     * the game continues. Game over or switch player.
     */

    //fonction qui lorsque le joueur clique sur une case determine la suite de la partie 

    clickCell = (row: number, col: number) => {
      
      const canContinue = this.board[row][col] === '' //constante qui determine que la case du tableau est vide
      

      if (canContinue && !this.waiting) {
        this.board[row][col] = this.currentPlayer
        this.display.updateBoard(row, col, this.currentPlayer) // si la case est vide et il y'a pas d'attente (partie pas terminee) alors lorsqu'il clicke ,le token saffiche et passe au joueur suivant .
  
        const win = this.isGameWon(row, col) //si le joueur gagne 
        const stalemate = this.board
          .map(row => row.filter(col => col === ''))
          .filter(row => row.length > 0) // si il ya egalite 
  
        if (!this.waiting) {
          if (win) {
            this.increaseScore() //incremente le score de 1
            this.display.updateScore(this.score, this.currentPlayer) //affiche le scrore sur la page web 
            this.gameOver(this.currentPlayer) //affiche un message de qui a gagner 
          } else if (stalemate.length < 1) {
            this.gameOver() //affiche un message de qui a gagner  
          } else {
            this.switchPlayer() // si pas de gagnant ni egalite change de joueur 
          }
        }
      }
    }
  
    /**
     * Reset the board after a delay after win or stalemate
     */
    gameOver = (winner?: string) => {
      this.waiting = true
      this.display.printMessage(winner) // fonction qui affiche un message de gagne/egalite lorsque le temps dattente est superrieur a 1500ms 
  
      setTimeout(() => {
        this.resetBoard()
        this.waiting = false
      }, this.wait) //fonction qui remet le compteur de temps a 0 et reinitilise le tableur 
    }
  
    /**
     * Create a new empty board
     * @return {Object[]} 3x3 multi-dimensional array of empty strings
     */
    createBoard = (): Array<Array<string>> => [['', '', ''], ['', '', ''], ['', '', '']] //fonction qui cree un tableur vide 
  
    /**
     * Restore the board to its original empty state
     */
    resetBoard = (): void => {
      this.display.clearMessage()
      this.display.clearGameBoard()
      this.board = this.createBoard() // fonction qui reinitialise le message le tableur et cree un nouveau tableur 
    }
  
    /**
     * Check is the current player has won the game
     * @param {number} row
     * @param {number} col
     * @return {boolean}
     */
    isGameWon = (row: number, col: number): boolean => {
      if (
        // Horizontal win
        (this.board[row][0] === this.currentPlayer &&
          this.board[row][1] === this.currentPlayer &&
          this.board[row][2] === this.currentPlayer) ||
        // Vertical win
        (this.board[0][col] === this.currentPlayer &&
          this.board[1][col] === this.currentPlayer &&
          this.board[2][col] === this.currentPlayer) ||
        // Diagonal win
        ((this.board[0][0] === this.currentPlayer &&
          this.board[1][1] === this.currentPlayer &&
          this.board[2][2] === this.currentPlayer) ||
          (this.board[2][0] === this.currentPlayer &&
            this.board[1][1] === this.currentPlayer &&
            this.board[0][2] === this.currentPlayer))
      )
        return true
      return false

    } //fonction qui check si le joueur a gagner 
  
    /**
     * Switch to the next player
     */
    switchPlayer = (): void => {
      this.currentPlayer = this.currentPlayer === this.players.x ? this.players.o : this.players.x // fonction qui passe au joueur suivant
    }
  
    /**
     * Increase the score of the winning player
     */
    increaseScore = (): void => {
      this.score[this.currentPlayer] += 1 //fonction qui aggremente le score de 1 
    }
  
    /**
     * Render score board and game board
     */
    startGame(): void {
      this.display.printScoreBoard(this.score)
      this.display.printGameBoard(this.board) //fonction qui affiche le jeu appelee dans l'index.html
    }
  }
  
