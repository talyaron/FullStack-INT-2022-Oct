function renderMovies(){
    try {
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

function showMovieSeats(id){
    const moviesContainer:HTMLDivElement | null = document.querySelector(".main__moviesContainer");
    const main:HTMLDivElement | null = document.querySelector(".main");
    const moviesString = localStorage.getItem('movies');
    let seatStatus:string = '';

    if (moviesContainer && main && moviesString){
        const movies = JSON.parse(moviesString);
        moviesContainer.style.display = 'none';
        const seatsString = localStorage.getItem('moviesSeats');
        if (seatsString){
            const seats = JSON.parse(seatsString);
            const seatsId = seats[id-1];

            let seatsDiv = '<div class="SeatsContainer"><div class="SeatsContainer__screen"></div>'
            let seatIndex = 0;
            // console.log(seatsId)
            const seatsRows = (seatsId['seatsArray'].length-1)/8;
            for (let k = 1 ; k<=seatsRows ; k++){
                seatsDiv += '<div class="SeatsContainer__row">'

                for (let i = 1 ; i<=(seatsId['seatsArray'].length-1)/6 ; i++){
                    seatIndex +=1;
                    if(seatsId['seatsArray'][seatIndex]['isFree'] == false){
                        seatStatus = 'occupied'
                    } else {
                        seatStatus = ''
                    }
                    seatsDiv += `<div onclick="chooseSeats(this.id)" class="SeatsContainer__seat ${seatStatus}" id="${id}:${seatIndex}"></div>`
                }
                seatsDiv += '</div>'
            }
            seatsDiv += '</div>'
            main.style.flexDirection = 'column'
            main.insertAdjacentHTML('beforebegin', `<div class="movieShowcase"><h1>${movies[id-1].name}</h1><img src="${movies[id-1].image}"><p>${movies[id-1].description}</p></div>`);
            main.insertAdjacentHTML('afterbegin', seatsDiv);
            main.insertAdjacentHTML('afterbegin', '<ul class="showcase"><li><div class="SeatsContainer__seat"></div><small>Available</small></li><li><div class="SeatsContainer__seat selected"></div><small>Selected</small></li><li><div class="SeatsContainer__seat occupied"></div><small>Occupied</small></li></ul>');

        }
    }
}

function chooseSeats(info){
    const seatNumber = parseInt((info.split(':'))[1]);
    const seatIdString = `${info}`
    const movieIdIndex = (info.split(':'))[0]-1
    const seatId:HTMLElement | null = document.getElementById(seatIdString);
    const moviesSeatsIdString = localStorage.getItem('moviesSeats');
    let userIndex:number | null = null;
    const allUsersString = localStorage.getItem('allUsers');
    let userMovieId = false;
    
    if (moviesSeatsIdString && allUsersString){
        const moviesSeatsIdObject = JSON.parse(moviesSeatsIdString);

        if (seatId && moviesSeatsIdObject){
            const allUsersObject = JSON.parse(allUsersString);
            for (let i in allUsersObject){
                if(allUsersObject[i].username.toLowerCase() == loggedInUser.toLowerCase()){
                    userIndex = parseInt(i);
                }
            }
            const movieId = (moviesSeatsIdObject[movieIdIndex])['id']

            // console.log(movieId['seatsArray'][seatNumber])
            if (userIndex != null){
                const userMovies = allUsersObject[userIndex]['movies']
                for (let i = 0 ; i < userMovies.length ; i++){
                    if (userMovies[i]['movieId'] == movieId){
                        userMovieId = true;
                    }
                }
                if (!userMovieId){
                    const movieObject:object = {'movieId': `${movieId}`, 'seatNumber':[]}
                        userMovies.push(movieObject);
                }
                for (let i = 0 ; i<userMovies.length ; i++){
                    if (parseInt(userMovies[i]['movieId']) == movieId){
                        if(!(userMovies[i]['seatNumber']).includes(seatNumber)){
                            userMovies[i]['seatNumber'].push(seatNumber);
                            localStorage.setItem('allUsers', JSON.stringify(allUsersObject));
                        }
                    }
                }
            }
            // if (movieId[(info.split(':'))[1]] ){

            // }
            // if(moviesSeatsIdObject)
            const movieSeatsArray = moviesSeatsIdObject[movieIdIndex]['seatsArray']
            if (movieSeatsArray[seatNumber]['isFree']){
                movieSeatsArray[seatNumber]['isFree'] = false;
                localStorage.setItem('moviesSeats',JSON.stringify(moviesSeatsIdObject))
                seatId.style.backgroundColor = '#2ecc71'
            }
            // for ()
        }
    }
}

function isAdmin(){
    if (allUsersString){
        const allUsersObject = JSON.parse(allUsersString);
        console.log(allUsersObject)
        for (let i = 0 ; i< allUsersObject.length ; i++){
            if (allUsersObject[i].username == loggedInUser && allUsersObject[i].isAdmin == true){
                const goHome = document.querySelector('#goHome')
                if (goHome){
                    goHome.insertAdjacentHTML('afterend', '<button onclick="addNewMovieContainer()" id="addNewMovie">Add New Movie</button>');
                }
                break;
            }
        }
    }

}

function addNewMovieContainer(){
    const moviesContainer = document.querySelector('.moviesContainer');

    if (moviesContainer){
        moviesContainer.insertAdjacentHTML('beforebegin', '<div class="addNewMovieContainer"><div class="closeAddMovie"></div><div class="addNewMovieContainer__info"><h1>Add New Movie</h1><form action="#" onsubmit="addNewMovie(event)"><input type="text"name="name"id="newMovieName"placeholder="Movie Name"/><input type="text"name="image"id="newMovieImage"placeholder="Image URL"/><select id="newMovieCategory" name="category" ><option value="Comedy">Comedy</option><option value="Action">Action</option><option value="Drama">Drama</option><option value="Fantasy">Fantasy</option><option value="Horror">Horror</option><option value="Mystery">Mystery</option><option value="Romance">Romance</option><option value="Thriller">Thriller</option></select><input type="submit"name="submit"id="addMovie"value="ADD"/></form></div></div>')
    }

    const addNewMovieContainer = document.querySelector('.addNewMovieContainer');
    const closeAddMovie = document.querySelector('.closeAddMovie');
    if (addNewMovieContainer && closeAddMovie){
        closeAddMovie.addEventListener('click', e => {
            addNewMovieContainer.remove();
        })
    }

}

function addNewMovie(info) {
    info.preventDefault();
    const newMovieName = info.target.elements.name.value;
    const newMovieImage = info.target.elements.image.value;
    const newMoviecategory = info.target.elements.category.value;
    console.log(newMovieName,newMovieImage,newMoviecategory)
}
isAdmin();
renderMovies();
renderUsername();
