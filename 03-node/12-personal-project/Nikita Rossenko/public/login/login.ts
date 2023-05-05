
async function handleLogin(e:any){
    try {
        e.preventDefault()

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (!username || !password) throw new Error("Please enter The Username & Password")


        fetch("/api/v1.0/users/login", {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ username, password })

        })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok === true){
                location.href="/"
            } else {
                console.log("Wrong username or password!")
            }
        })
        .catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }
}