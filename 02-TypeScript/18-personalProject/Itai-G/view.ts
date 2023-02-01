const canvas = document.getElementById('gameCanvas');
const gameDisplay = new GameDisplay('gameCanvas');
const gameEngine = new GameEngine(gameDisplay);
gameEngine.run();