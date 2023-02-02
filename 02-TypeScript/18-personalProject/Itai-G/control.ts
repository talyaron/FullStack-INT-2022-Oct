function gameUpdate() {
    ball.Update();
    paddle1.Update();
    ballCollisonWithEdges(ball);
}

function gameDraw(){
    ball.draw()
    paddle1.draw();
    paddle2.draw();
}

function gameLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    window.requestAnimationFrame(gameLoop);
    gameUpdate()
    gameDraw()
}

gameLoop();




function ballCollisonWithEdges (ball:Ball){
    try {
        if(ball.pos.y + ball.radius >= canvas.height ){
            ball.velocity.y *= -1;
        }
        if(ball.pos.y - ball.radius <= 0){
            ball.velocity.y *= -1;
        }
        if(ball.pos.x + ball.radius >= canvas.width){
            ball.velocity.x *= -1;
        }
        if(ball.pos.x - ball.radius <= 0){
            ball.velocity.x *= -1;
        }
    } catch (error) {
        console.error("eroor")
    }
}
