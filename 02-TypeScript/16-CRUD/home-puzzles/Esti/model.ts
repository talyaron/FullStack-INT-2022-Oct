const balloonC = []

class BalloonCalss {
	public x:number
	public y:number
	public radius:number
	public color:string

  
    constructor(){
        this.x = Math.random() * balloonCanvas.width
        this.y = Math.random() * balloonCanvas.height;
        this.radius = Math.floor(Math.random() * 30 + 25);
        this.color = "hsl(" + Math.floor(Math.random() * 1000) + ",100%, 50%)";
    }

   balloonC = new(BalloonCalss)
}
