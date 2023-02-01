class GameState {
    x: number;
    y: number;
    dx: number;
    dy: number;
    paddleHeight: number;
    paddleWidth: number;
    paddleX: number;
  
    constructor(canvas: HTMLCanvasElement | null) {
      if (canvas) {
        this.x = canvas.width/2;
        this.y = canvas.height-30;
        this.dx = 2;
        this.dy = -2;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width-this.paddleWidth)/2;
      }
    }
  }
  class GameDisplay{
    canvas: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    paddleWidth: number;

    constructor(canvasId: string){
        this.canvas = document.getElementById(canvasId)as HTMLCanvasElement;
        this.ctx = this.canvas ? this.canvas.getContext('2d'): null;
        this.paddleWidth = 75;
    }
    clear(){
        if(this.ctx){
            this.ctx.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
        }
        }
        drawBall(x: number, y:number, ballRadius: number){
            if(this.ctx){
                this.ctx.beginPath();
                this.ctx.arc(x, y, ballRadius , 0 , Math.PI*2);
                this.ctx.fillStyle = "#0095DD";
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
        drawPaddle(x:number , y:number , paddleWidth:number, paddleHeight: number){
            if(this.ctx){
                this.ctx.beginPath();
                this.ctx.rect(x, y, paddleWidth , paddleHeight);
                this.ctx.fillStyle = "#0095DD";
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
    }



    class GameEngine {
        display: GameDisplay;
        ballX: number;
        ballY: number;
        ballRadius: number;
        xSpeed: number;
        ySpeed: number;
      
        constructor(display: GameDisplay) {
          this.display = display;
          this.ballX = 50;
          this.ballY = 50;
          this.ballRadius = 10;
          this.xSpeed = 1;
          this.ySpeed = 1;
        }
      
        run() {
          this.display.clear();
          this.display.drawPaddle(this.leftPaddle, 'left',this.paddleWidth,this.paddleHeight);
          this.display.drawPaddle(this.rightPaddle, 'right', this.paddleWidth,this.paddleHeight);
          this.display.drawBall(this.ballX, this.ballY, this.ballRadius);
          this.updateBallPosition();
          requestAnimationFrame(this.run.bind(this));
        }
      
        updateBallPosition() {
          this.ballX += this.xSpeed;
          this.ballY += this.ySpeed;
        }
      }
      
      
