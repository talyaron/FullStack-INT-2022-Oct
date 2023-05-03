function loggedInUser() {
    try {
        fetch("/api/users/get-user") 
            .then((res) => res.json())
            .then(({ user }) => {
                try {
                    if (!user){
                        const newUrl = `../register`
                        window.location.replace(newUrl)
                    }else {
                        renderLoggedInUserName(user.name)
                    }
                } catch (error) {
                    console.error(error);
                }
            })
    } catch (error) {
        console.error(error);
        return undefined
    }
}

function movieCookie(movieId: string){
    try {
         const movie: any = { movieId }
 
         fetch("/api/movies/enter-movie", {
           method: "POST",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           body: JSON.stringify(movie),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data)
             redirectToTheatrePage() 
           })
           .catch((error) => {
             console.error(error)
           })
    } catch (error) {
        console.error(error);
        return undefined
    }
}

function redirectToTheatrePage(){ 
    try {
      const newUrl = `../theatre`
      window.location.replace(newUrl)
    } catch (error) {
      console.error(error)
    }
  }


