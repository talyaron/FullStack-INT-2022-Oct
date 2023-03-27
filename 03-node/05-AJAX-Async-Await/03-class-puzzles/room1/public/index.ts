interface Joke {
    content: string;
    uid?: string;
  }
  
  function handleGetJokes() {
    console.log("test");
    try {
      fetch("/api/get-jokes")
        .then((res) => res.json())
        .then(({ jokes }) => {
          try {
            if (!jokes) throw new Error("didnt find jokes");
            console.log(jokes);
            renderJokes(jokes);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderJokes(jokes: Array<Joke>) {
    try {
      if (!jokes) throw new Error("No jokes");
  
      const html = jokes
        .map((joke) => {
          return renderJoke(joke);
        })
        .join(" ");
      const jokesElement = document.querySelector("#jokes");
      if (!jokesElement) throw new Error("coundnt find jokes element on DOM");
  
      jokesElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderJoke(joke: Joke) {
    try {
      return `<div class="userCard">
              <p contenteditable oninput="handleJokeUpdate(event, '${joke.uid}')">${joke.content}</p>
              <button onclick='handleDeleteJoke("${joke.uid}")'>DELETE</button>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  function handleJokeUpdate(ev: any, uid: string) {
    try {
      console.log(uid);
      const content = ev.target.textContent;
      fetch("/api/update-content", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, uid }),
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleAddJoke(ev: any) {
    try {
      ev.preventDefault();
      const content = ev.target.elements.content.value;
      if (!content) throw new Error("No content");
      const newJoke: any = { content };
  
      //send to server:
      fetch("/api/add-joke", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJoke),
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
  
  function handleDeleteJoke(uid: string) {
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
        
        
          renderJoke(jokes);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  