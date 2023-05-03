function handleLogin(ev){
    try {
        ev.preventDefault()
        const name:string = ev.target.elements.name.value
        const password:string  = ev.target.elements.password.value
        if (!name) throw new Error("No name found")
        if (!password) throw new Error("No Password found")

        const newUser: any = { name, password }

        fetch("/api/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data", data)
            console.log("redirecting")
            redirectToHomePage() 
          })
          .catch((error) => {
            console.error(error)
          });
        ev.target.reset()

    } catch (error) {
        console.error(error)
    }
}


function redirectToHomePage(){ 
  try {
    const newUrl = `../index`
    window.location.replace(newUrl)
  } catch (error) {
    console.error(error)
  }
}


