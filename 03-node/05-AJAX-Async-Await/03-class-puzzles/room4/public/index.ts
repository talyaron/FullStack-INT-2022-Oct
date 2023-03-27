interface Joke {
  name: string;
  joke: string;
  uid: string;
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
handleGetJokes();
function renderJokes(jokes: Joke[]) {
  try {
    if (!jokes) throw new Error("No jokes");

    const html = jokes
      .map((joke) => {
        return renderJoke(joke);
      })
      .join(" ");
    const jokesElement = document.querySelector("#root");
    if (!jokesElement) throw new Error("coundnt find jokes element on DOM");

    jokesElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderJoke(joke: Joke) {
  try {
    return `<div class="jokeCard">
              <h1>${joke.name}</h1>
              <p ${joke.joke}</p>
              <button onclick='handleDeleteUser("${joke.uid}")'>DELETE</button>
              </div>`;
  } catch (error) {
    console.error(error);
    return null;
  }
}
