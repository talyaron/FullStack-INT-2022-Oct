function renderMovies(){
    try {
        const isLoggedInString:string | null = localStorage.getItem('isLoggedIn');
        let isLoggedIn:boolean = false;
        if(isLoggedInString){
            const isLoggedInObject = JSON.parse(isLoggedInString);
            isLoggedIn = isLoggedInObject['isLoggedIn'];
        } else {
            isLoggedIn = false
        }

        if (isLoggedIn){
            if (isLoggedIn == true){
                const moviesContainer = document.querySelector('.main__moviesContainer');
                if (moviesContainer){
                    const moviesString:string | null = localStorage.getItem('movies');

                    if(moviesString){
                        const moviesArray:Array<Movie> = JSON.parse(moviesString)

                        if (moviesArray){
                            for (let i = 0 ; i<moviesArray.length ; i++){
                                const movieDivs = `<div class="main__moviesContainer__movie">
                                <div class="main__moviesContainer__movie__details">
                                    <h1>${moviesArray[i].name}</h1>
                                    <button onclick="showMovieSeats(${moviesArray[i].id})" id="movie${moviesArray[i].id}">Pick a Seat</button>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta at officia facilis eligendi maiores, aperiam expedita nemo cumque, sequi explicabo. Quaerat nisi porro pariatur vitae, earum facilis obcaecati minus?</p>
                                </div>
                                <img src="${moviesArray[i].image}" >
                            </div>`
                                moviesContainer.insertAdjacentHTML('beforeend', movieDivs)
                            }
                        }
                    }
                }
            } else {
                location.href = 'login.html';
            }
        } else {
            location.href = 'login.html';
        }

        const logoutButton = document.querySelector('#logoutBtn');

        logoutButton?.addEventListener('click', e => {
            localStorage.removeItem('isLoggedIn')
            location.href = 'login.html'
        })
    } catch (error) {
        console.error(error);
    }
}

function renderUsername(){
    const usernameHtml = document.querySelector('.username');
    const usernameString = localStorage.getItem('isLoggedIn');
    if (usernameHtml && usernameString){
        const username = JSON.parse(usernameString);
        usernameHtml.innerHTML = `<p>Welcome: ${username['username']}</p>`;
    }
}

renderMovies();
renderUsername();

function showMovieSeats(movieId) {

}