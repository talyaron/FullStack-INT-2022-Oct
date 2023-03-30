interface Joke {
    name: string;
    subtext:string;
    uid?: string;
  }

  
  function handleGetjokes() {
    console.log("test");
    try {
      fetch("/api/get-jokes")
        .then((res) => res.json())
        .then(({ jokes }) => {
          try {
            if (!jokes) throw new Error("didnt find jokes");
            console.log(jokes);
            displayJoke(jokes);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function displayJoke(jokes: Array<Joke>): void {
    try {
      if (!jokes || jokes.length === 0) throw new Error("No jokes found");
      const randomIndex: number = Math.floor(Math.random() * jokes.length);
      const randomJoke: Joke = jokes[randomIndex];
      renderjokes(jokes)

    } catch (error) {
      console.error(error);
    }
  }  
  
  function renderjokes(jokes: Array<Joke>): void {
    try {
      if (!jokes || jokes.length === 0) throw new Error("No jokes found");
  
      const jokesElement: any = document.querySelector("#jokes");
      if (!jokesElement) throw new Error("Could not find jokes element on DOM");
  
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const html = renderjoke(jokes[randomIndex]);
      jokesElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  function renderjoke(joke: Joke) {
    try {
      return `<div class="jokeCard">
              <p contenteditable oninput="handlejokeNameUpdate(event,'${joke.uid}')">${joke.name}</p>
              <p contenteditable oninput="handlejokeNameUpdate(event,'${joke.uid}')">${joke.subtext}</p>
              <button onclick='handleDeletejoke("${joke.uid}")'>DELETE</button>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  function handlejokeNameUpdate(ev: any, uid: string) {
    try {
      console.log(uid);
      const name = ev.target.textContent;
      const subtext= ev.target.textContent
      fetch("/api/update-joke-name", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, subtext, uid }),
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleAddjoke(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const subtext= ev.target.elements.subtext.value
      if (!name) throw new Error("No name");
      const newjoke: any = { name, subtext };
  
      fetch("/api/add-joke", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newjoke),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleDeletejoke(uid: string) {
    try {
      console.log(uid);
  
      fetch("/api/delete-joke", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      })
        .then((res) => res.json())
        .then(({ jokes }) => {
        
        
          renderjokes(jokes);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
