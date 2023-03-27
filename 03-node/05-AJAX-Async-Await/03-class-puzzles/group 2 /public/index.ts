const btn = document.querySelector(`#btn`);

class Joke{
    public uid:string = uuidv4()
    constructor(
        public titel:string,
        public subtext:string
    ){}
}

if (btn) {
    btn.addEventListener("click", () => {
      try {
        const body = document.querySelector(`body`);
  
        fetch("/random-joke")
          .then((response) => response.json())
          .then((data) => {
            const randomjokes = data[`randomjoke`];
            if (!randomjokes) throw new Error("No random colors");
            if (!body) throw new Error("No body");
            body.style.backgroundColor = `#${randomjokes}`;
          });
      } catch (error) {
        console.error(error);
      }
    });
  }

function uuidv4(): string {
    throw new Error("Function not implemented.");
}
  

function getRandomJokes(){
    const random:number= Math.floor(Math.random()*Jokes)
}