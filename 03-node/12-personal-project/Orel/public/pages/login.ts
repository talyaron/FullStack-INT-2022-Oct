import { renderUserLogin } from ".";

async function handleSubmitLogin(ev: any) {
    try {
        ev.preventDefault()
        const email = ev.target.elements.email.value
        const password = ev.target.elements.password.value
        if (!email) throw new Error("must to write Email!")
        if (!password) throw new Error("must to write password!")
        MatchDetailUser(email, password)
    } catch (error) {
        console.error(error)
    }
}

async function MatchDetailUser(email: string, password: string) {
    try {

        const response = await fetch('/api/users/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ email, password })

        })
        const data = await response.json();
        if (!data) throw new Error('no get user from DB');
        if(data.ok === true) window.location.href = '/'
    } catch (error) {
        console.error(error)
    }
}

