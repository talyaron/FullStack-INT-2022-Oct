


function handleGetJokes() {
    try {
        fetch("/jokes")
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
        return `<div class="joke">
              <p contenteditable oninput="handleJokeValueUpdate(event, '${joke.uid}')">${joke.value}</p>
              <button onclick='handleDeleteJoke("${joke.uid}")'>DELETE</button>
              </div>`;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function handleJokeValueUpdate(ev: any, uid: string) {
    try {
        const value = ev.target.textContent;
        fetch("/joke", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value, uid }),
        });
    } catch (error) {
        console.error(error);
    }
}

function handleAddJokes(ev: any) {
    try {
        ev.preventDefault();
        const value = ev.target.elements.value.value;

        if (!value) throw new Error("No value");

        const newJoke: any = {
            value,
        };

        //send to server:
        fetch("/joke", {
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

        fetch("/joke", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid }),
        })
            .then((res) => res.json())
            .then(({ jokes }) => {


                renderJokes(jokes);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}