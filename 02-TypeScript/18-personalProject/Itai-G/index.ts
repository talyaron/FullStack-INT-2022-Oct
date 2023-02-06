function gameUpdate() {
    ball.Update();
    paddle1.Update();
    paddleCollisonWithTheEdges(paddle1);
    paddleCollisonWithTheEdges(paddle2);
    ballCollisonWithEdges(ball);
    ballPaddleCollision(ball, paddle1);
    ballPaddleCollision(ball, paddle2);
    playersAI(ball , paddle2);
    increseScore(ball, paddle1, paddle2);
}

function gameDraw(){
    ball.draw()
    paddle1.draw();
    paddle2.draw();
}

function gameLoop(){
    req = requestAnimationFrame(gameLoop);
    if(gameOver) return cancelAnimationFrame(req)
    ctx.clearRect(0,0,canvas.width, canvas.height);
    gameUpdate();
    gameDraw();
}

gameLoop();