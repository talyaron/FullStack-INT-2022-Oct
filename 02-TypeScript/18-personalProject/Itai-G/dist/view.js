var canvas = document.getElementById('gameCanvas');
var gameDisplay = new GameDisplay('gameCanvas');
var gameEngine = new GameEngine(gameDisplay);
gameEngine.run();
