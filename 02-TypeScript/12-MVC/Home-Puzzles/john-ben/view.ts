    class DOMDisplay implements Display {
    /**
     * Bind document click to the game if clicked element is a cell
     * @param {requestCallback} clickHandler
     */
    bindHandler(clickHandler: (row: number, col: number) => void): void {
      document.addEventListener('click', (event: Event) => {
        const clicked = <HTMLElement>event.target
        const isColumn = clicked.className === 'col'
  
        if (isColumn) {
          const cell = clicked
          const row = +cell.parentElement!.dataset.row!
          const col = +cell.dataset.col!
          clickHandler(row, col)
        }
      })
    }

    /**
     * Create an element and apply an optional class and dataset
     * @param {string} tag
     * @param {string} className (Optional)
     * @param {Object[]} dataset (Optional)
     * @return {HTMLElement}
     */
    createElement = (tag: string, className?: string, dataset?: Array<any>): HTMLElement => {
      const element = document.createElement(tag)
      if (className) element.classList.add(className)
      if (dataset) element.dataset[dataset[0]] = dataset[1]
  
      return element
    }
  
    /**
     * Retrieve an existing element in the DOM
     * @param {string} selector
     * @return {HTMLElement}
     */
    getElement = (selector: string): HTMLElement => <HTMLElement>document.querySelector(selector)
  
    /**
     * Retrieve all elements by selector from the DOM
     * @param {string} selector
     * @return {NodeList}
     */
    getAllElements = (selector: string): NodeList => <NodeList>document.querySelectorAll(selector)
  
        /**
     * Create the score board view and render it to the DOM
     * @param {Score} scoreData
     */
         printScoreBoard = (scoreData: Score): void => {
            const game = this.getElement('#game')
            const scoreBoard = this.createElement('div', 'score')
            game.append(scoreBoard)
        
            const playerOneScore = this.createElement('div', 'x')
            playerOneScore.textContent = `Player 1: ${scoreData.x}`
            playerOneScore.id = 'score-x'
        
            const playerTwoScore = this.createElement('div', 'o')
            playerTwoScore.textContent = `Player 2: ${scoreData.o}`
            playerTwoScore.id = 'score-o'
        
            scoreBoard.append(playerOneScore, playerTwoScore)
          }

    /**
     * Create the game board view and render it to the DOM
     * @param {Object[]} boardData 3x3 multi-dimensional array of empty strings
     */

    printGameBoard = (boardData: Array<Array<string>>): void => {
      const game = this.getElement('#game')
      const gameBoard = this.createElement('div', 'board', undefined)
      game.append(gameBoard)
  
      boardData.forEach((row, i) => {
        const boardRow = this.createElement('div', 'row', ['row', i])
        gameBoard.append(boardRow)
  
        row.forEach((col, j) => {
          const boardCol = this.createElement('div', 'col', ['col', j])
          boardRow.append(boardCol)
        })
      })
    }
  
    /**
     * Update the board by appending a player token to a cell
     * @param {number} row
     * @param {number} col
     * @param {string} currentPlayer
     */
    updateBoard = (row: number, col: number, currentPlayer: string): void => {
      const playerToken = this.createElement('span', currentPlayer, undefined)
      playerToken.textContent = currentPlayer
  
      const boardRow = this.getElement(`[data-row="${row}"]`)
      const cell = <HTMLElement>boardRow.querySelector(`[data-col="${col}"]`)
  
      cell.append(playerToken)
    }
  
    /**
     * Set all cells in the board to empty strings
     */
    clearGameBoard = (): void => {
      const cells = this.getAllElements('.col')
  
      cells.forEach(cell => {
        cell.textContent = ''
      })
    }
  
    /**
     * Update the existing score for the current player
     * @param {Score} currentScore
     * @param {string} currentPlayer
     */
    updateScore = (currentScore: Score, currentPlayer: string): void => {
      const currentPlayerScore = this.getElement(`#score-${currentPlayer}`)
      const player = currentPlayer === 'x' ? 'Player 1' : 'Player 2'
      const d: number = currentScore[currentPlayer]
      currentPlayerScore.textContent = `${player}: ${d}`
    }

    /**
     * Print the win, lose, or stalemate message
     * @param {string} winner
     */
    printMessage = (winner: string): void => {
      const message:  HTMLElement|null = this.createElement('div', 'message')
      const player = winner === 'x' ? 'Player 1' : 'Player 2'
  
      message.textContent = winner ? `${player} wins!` : 'Nobody wins!'
  
      const game = this.getElement('#game')
      game.append(message)
    } // imprime le message de gagne/egalite 
  
    /**
     * Clear message from the screen
     */
    clearMessage = (): void => {
      const message = this.getElement('.message')
      message.remove()
    } //enleve le message de gagne/egalite 
    
    newGame = (): void => {
      const game = this.getElement('#game')
      const button_newGame = this.createElement('div',"button")
      button_newGame.innerHTML =`<button class="button_newGame">New Game</button>`
      button_newGame.addEventListener("click", (event) => {
        window.location.reload();
        //  this.updateBoard
        // ticTacToe.res
        // ticTacToe.startGame()
        // ticTacToe.display.clearGameBoard
      });
      game.append(button_newGame)
    }
   
  }


