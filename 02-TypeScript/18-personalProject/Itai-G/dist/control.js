function ballCollisonWithEdges(ball) {
    try {
        if (ball.pos.y + ball.radius >= canvas.height) {
            ball.velocity.y *= -1;
        }
        if (ball.pos.y - ball.radius <= 0) {
            ball.velocity.y *= -1;
        }
    }
    catch (error) {
        console.error("eroor");
    }
}
function paddleCollisonWithTheEdges(paddle) {
    if (paddle.pos.y <= 0) {
        paddle.pos.y = 0;
    }
    if (paddle.pos.y + paddle.height >= canvas.height) {
        paddle.pos.y = canvas.height - paddle.height;
    }
}
function ballPaddleCollision(ball, paddle) {
    var dx = Math.abs(ball.pos.x - paddle.GetCenter().x);
    var dy = Math.abs(ball.pos.y - paddle.GetCenter().y);
    if (dx <= (ball.radius + paddle.GetHalfWidth()) && dy <= (paddle.GetHalfHeight() + ball.radius)) {
        ball.velocity.x *= -1;
    }
}
function playersAI(ball, paddle) {
    try {
        if (ball.velocity.x > 0) {
            if (ball.pos.y > paddle.pos.y) {
                paddle.pos.y += paddle.velocity.y;
                if (paddle.pos.y + paddle.height >= canvas.height) {
                    paddle.pos.y = canvas.height - paddle.height;
                }
            }
            if (ball.pos.y < paddle.pos.y) {
                paddle.pos.y -= paddle.velocity.y;
                if (paddle.pos.y <= 0) {
                    paddle.pos.y = 0;
                }
            }
        }
    }
    catch (error) {
        console.error("problem with the");
    }
}
function resetBall(ball) {
    if (ball.velocity.x > 0) {
        ball.pos.x = canvas.width - 150;
        ball.pos.y = (Math.random() * (canvas.height - 200) + 100);
    }
    if (ball.velocity.x < 0) {
        ball.pos.x = 150;
        ball.pos.y = (Math.random() * (canvas.height - 200) + 100);
    }
    ball.velocity.x *= -1;
    ball.velocity.y *= -1;
}
function increseScore(ball, paddle1, paddle2) {
    try {
        if (ball.pos.x <= ball.radius) {
            paddle2.score += 1;
            var player2Score = document.getElementById("player2Score");
            if (player2Score) {
                player2Score.innerHTML = paddle2.score.toString();
                resetBall(ball);
                if (paddle2.score == 10) {
                    setTimeout(function () {
                        bigAd.style.display = "block";
                    }, 500);
                }
            }
        }
        if (ball.pos.x >= canvas.width + ball.radius) {
            paddle1.score += 1;
            var player1Score = document.getElementById("player1Score");
            if (player1Score) {
                player1Score.innerHTML = paddle1.score.toString();
                resetBall(ball);
                if (paddle1.score == 10) {
                    setTimeout(function () {
                        bigAd.style.display = "block";
                    }, 500);
                }
            }
        }
    }
    catch (error) {
        console.error("score problem");
    }
}
