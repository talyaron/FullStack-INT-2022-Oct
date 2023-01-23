var TicTacToe = /** @class */ (function () {
    function TicTacToe(display) {
        var _this = this;
        /**
         * Click a cell in the game board and determine if its a win, a stalemate, or
         * the game continues. Game over or switch player.
         */
        //fonction qui lorsque le joueur clique sur une case determine la suite de la partie 
        this.clickCell = function (row, col) {
            var canContinue = _this.board[row][col] === ''; //constante qui determine que la case du tableau est vide
            if (canContinue && !_this.waiting) {
                _this.board[row][col] = _this.currentPlayer;
                _this.display.updateBoard(row, col, _this.currentPlayer); // si la case est vide et il y'a pas d'attente (partie pas terminee) alors lorsqu'il clicke ,le token saffiche et passe au joueur suivant .
                var win = _this.isGameWon(row, col); //si le joueur gagne 
                var stalemate = _this.board
                    .map(function (row) { return row.filter(function (col) { return col === ''; }); })
                    .filter(function (row) { return row.length > 0; }); // si il ya egalite 
                if (!_this.waiting) {
                    if (win) {
                        _this.increaseScore(); //incremente le score de 1
                        _this.display.updateScore(_this.score, _this.currentPlayer); //affiche le scrore sur la page web 
                        _this.gameOver(_this.currentPlayer); //affiche un message de qui a gagner 
                    }
                    else if (stalemate.length < 1) {
                        _this.gameOver(); //affiche un message de qui a gagner  
                    }
                    else {
                        _this.switchPlayer(); // si pas de gagnant ni egalite change de joueur 
                    }
                }
            }
        };
        /**
         * Reset the board after a delay after win or stalemate
         */
        this.gameOver = function (winner) {
            _this.waiting = true;
            _this.display.printMessage(winner); // fonction qui affiche un message de gagne/egalite lorsque le temps dattente est superrieur a 1500ms 
            setTimeout(function () {
                _this.resetBoard();
                _this.waiting = false;
            }, _this.wait); //fonction qui remet le compteur de temps a 0 et reinitilise le tableur 
        };
        /**
         * Create a new empty board
         * @return {Object[]} 3x3 multi-dimensional array of empty strings
         */
        this.createBoard = function () { return [['', '', ''], ['', '', ''], ['', '', '']]; }; //fonction qui cree un tableur vide 
        /**
         * Restore the board to its original empty state
         */
        this.resetBoard = function () {
            _this.display.clearGameBoard();
            _this.display.clearMessage();
            _this.board = _this.createBoard(); // fonction qui reinitialise le message le tableur et cree un nouveau tableur 
        };
        /**
         * Check is the current player has won the game
         * @param {number} row
         * @param {number} col
         * @return {boolean}
         */
        this.isGameWon = function (row, col) {
            if (
            // Horizontal win
            (_this.board[row][0] === _this.currentPlayer &&
                _this.board[row][1] === _this.currentPlayer &&
                _this.board[row][2] === _this.currentPlayer) ||
                // Vertical win
                (_this.board[0][col] === _this.currentPlayer &&
                    _this.board[1][col] === _this.currentPlayer &&
                    _this.board[2][col] === _this.currentPlayer) ||
                // Diagonal win
                ((_this.board[0][0] === _this.currentPlayer &&
                    _this.board[1][1] === _this.currentPlayer &&
                    _this.board[2][2] === _this.currentPlayer) ||
                    (_this.board[2][0] === _this.currentPlayer &&
                        _this.board[1][1] === _this.currentPlayer &&
                        _this.board[0][2] === _this.currentPlayer)))
                return true;
            return false;
        }; //fonction qui check si le joueur a gagner 
        /**
         * Switch to the next player
         */
        this.switchPlayer = function () {
            _this.currentPlayer = _this.currentPlayer === _this.players.x ? _this.players.o : _this.players.x; // fonction qui passe au joueur suivant
        };
        /**
         * Increase the score of the winning player
         */
        this.increaseScore = function () {
            _this.score[_this.currentPlayer] += 1; //fonction qui aggremente le score de 1 
        };
        this.display = display;
        this.board = this.createBoard();
        this.players = { x: "x", o: "o" };
        this.wait = 3000;
        this.waiting = false;
        this.score = { x: 0, o: 0 };
        this.currentPlayer = this.players.x;
        this.display.bindHandler(this.clickCell);
    }
    Object.defineProperty(TicTacToe.prototype, "getWait", {
        get: function () {
            return this.wait;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TicTacToe.prototype, "changeWait", {
        set: function (newWait) {
            this.wait = newWait;
            newWait = 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Render score board and game board
     */
    TicTacToe.prototype.startGame = function () {
        this.display.printScoreBoard(this.score);
        this.display.printGameBoard(this.board); //fonction qui affiche le jeu appelee dans l'index.html
        this.display.newGame();
    };
    return TicTacToe;
}());
