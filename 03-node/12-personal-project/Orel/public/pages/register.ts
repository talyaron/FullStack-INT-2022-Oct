async function handleSubmitRegister(ev: any) {
    try {
        ev.preventDefault()
        if (confirm("are you sure?")) {
            const name = ev.target.elements.name.value
            const email = ev.target.elements.email.value
            const password = ev.target.elements.password.value
            const confirmPassword = ev.target.elements.confirmPassword.value

            if (password !== confirmPassword) throw new Error("The passwords are not the same ")
            if (!name) throw new Error("miss name")
            if (!email) throw new Error("miss email")
            if (!password) throw new Error("miss password")
            console.log(name, email, password);
            const dataJs = await fetch("/api/users/create-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password })
            })
            const data = await dataJs.json();

            window.location.href = "/login"
        } else {
            return
        }

    } catch (error) {
        const InvalidMessageRoot = document.querySelector('#InvalidMessageRoot')!
        InvalidMessageRoot.innerHTML = error
        setTimeout(() => {
            InvalidMessageRoot.classList.add("active")
        }, 2000)

        console.error(error)
    }
}