function handleUserRegister(ev){
    try {
        ev.preventDefault()
        const name:string = ev.target.elements.name.value
        const password:string  = ev.target.elements.password.value
        if (!name) throw new Error("No name found")
        if (!password) throw new Error("No Password found")

        const user: any = { name, password }

        fetch("/api/users/create-user", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const newUrl = `../login`
              window.location.replace(newUrl)
            })
            .catch((error) => {
              console.error(error)
            });
        ev.target.reset()

    } catch (error) {
        console.error(error)
    }
}
