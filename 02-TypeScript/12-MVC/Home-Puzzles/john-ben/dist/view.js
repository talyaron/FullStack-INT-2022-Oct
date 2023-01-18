var DOMDisplay = /** @class */ (function () {
    function DOMDisplay() {
        var _this = this;
        /**
         * Create an element and apply an optional class and dataset
         * @param {string} tag
         * @param {string} className (Optional)
         * @param {Object[]} dataset (Optional)
         * @return {HTMLElement}
         */
        this.createElement = function (tag, className, dataset) {
            var element = document.createElement(tag);
            if (className)
                element.classList.add(className);
            if (dataset)
                element.dataset[dataset[0]] = dataset[1];
            return element;
        };
        /**
         * Retrieve an existing element in the DOM
         * @param {string} selector
         * @return {HTMLElement}
         */
        this.getElement = function (selector) { return document.querySelector(selector); };
        /**
         * Retrieve all elements by selector from the DOM
         * @param {string} selector
         * @return {NodeList}
         */
        this.getAllElements = function (selector) { return document.querySelectorAll(selector); };
        /**
     * Create the score board view and render it to the DOM
     * @param {Score} scoreData
     */
        this.printScoreBoard = function (scoreData) {
            var game = _this.getElement('#game');
            var scoreBoard = _this.createElement('div', 'score');
            game.append(scoreBoard);
            var playerOneScore = _this.createElement('div', 'x');
            playerOneScore.textContent = "Player 1: " + scoreData.x;
            playerOneScore.id = 'score-x';
            var playerTwoScore = _this.createElement('div', 'o');
            playerTwoScore.textContent = "Player 2: " + scoreData.o;
            playerTwoScore.id = 'score-o';
            scoreBoard.append(playerOneScore, playerTwoScore);
        };
        /**
         * Create the game board view and render it to the DOM
         * @param {Object[]} boardData 3x3 multi-dimensional array of empty strings
         */
        this.printGameBoard = function (boardData) {
            var game = _this.getElement('#game');
            var gameBoard = _this.createElement('div', 'board', undefined);
            game.append(gameBoard);
            boardData.forEach(function (row, i) {
                var boardRow = _this.createElement('div', 'row', ['row', i]);
                gameBoard.append(boardRow);
                row.forEach(function (col, j) {
                    var boardCol = _this.createElement('div', 'col', ['col', j]);
                    boardRow.append(boardCol);
                });
            });
        };
        /**
         * Update the board by appending a player token to a cell
         * @param {number} row
         * @param {number} col
         * @param {string} currentPlayer
         */
        this.updateBoard = function (row, col, currentPlayer) {
            var playerToken = _this.createElement('span', currentPlayer, undefined);
            playerToken.textContent = currentPlayer;
            var boardRow = _this.getElement("[data-row=\"" + row + "\"]");
            var cell = boardRow.querySelector("[data-col=\"" + col + "\"]");
            cell.append(playerToken);
        };
        /**
         * Set all cells in the board to empty strings
         */
        this.clearGameBoard = function () {
            var cells = _this.getAllElements('.col');
            cells.forEach(function (cell) {
                cell.textContent = '';
            });
        };
        /**
         * Update the existing score for the current player
         * @param {Score} currentScore
         * @param {string} currentPlayer
         */
        this.updateScore = function (currentScore, currentPlayer) {
            var currentPlayerScore = _this.getElement("#score-" + currentPlayer);
            var player = currentPlayer === 'x' ? 'Player 1' : 'Player 2';
            var d = currentScore[currentPlayer];
            currentPlayerScore.textContent = player + ": " + d;
        };
        /**
         * Print the win, lose, or stalemate message
         * @param {string} winner
         */
        this.printMessage = function (winner) {
            var message = _this.createElement('div', 'message');
            var player = winner === 'x' ? 'Player 1' : 'Player 2';
            message.textContent = winner ? player + " wins!" : 'Nobody wins!';
            var game = _this.getElement('#game');
            game.append(message);
        }; // imprime le message de gagne/egalite 
        /**
         * Clear message from the screen
         */
        this.clearMessage = function () {
            var message = _this.getElement('.message');
            message.remove();
        }; //enleve le message de gagne/egalite 
    }
    /**
     * Bind document click to the game if clicked element is a cell
     * @param {requestCallback} clickHandler
     */
    DOMDisplay.prototype.bindHandler = function (clickHandler) {
        document.addEventListener('click', function (event) {
            var clicked = event.target;
            var isColumn = clicked.className === 'col';
            if (isColumn) {
                var cell = clicked;
                var row = +cell.parentElement.dataset.row;
                var col = +cell.dataset.col;
                clickHandler(row, col);
            }
        });
    };
    return DOMDisplay;
}());
