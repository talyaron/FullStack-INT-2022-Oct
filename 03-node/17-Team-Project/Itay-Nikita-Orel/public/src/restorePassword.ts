async function restorePassword(e:any) {
    try {
        e.preventDefault()

        const userName = e.target.elements.userName.value;
        const email = e.target.elements.email.value;

        if (!userName) throw new Error("No userName");
        if (!email) throw new Error("No email");

        const user = {userName,email}

        await fetch("/api/users/restore-password", {
            method: "POST",
            headers: {
                Accept: "application/json",
              "Content-Type": "application/json",
            },
                  body: JSON.stringify(user)
                })        
                .then((res) => res.json())
                .then((data) => {
                    const container__form = document.querySelector(".container__form")
                    const userNotification:any = document.querySelector(".userNotification")
                    if (!container__form) throw new Error("DOM Error")
                    if (data.error) {

                        if (!userNotification){
                            container__form.insertAdjacentHTML('afterend', "<p class='userNotification'>Username or Email dosen't exist<p>")
                        } else {
                            userNotification.innerText = data.error
                        }

                        throw new Error(data.error)
                    }
                    if (!userNotification){
                        container__form.insertAdjacentHTML('afterend', "<p class='userNotification'>Check your email!<p>")
                        const userNotificationGreen:any = document.querySelector(".userNotification")
                        userNotificationGreen.style.color = "white"
                    }

                })

    } catch (error) {
        console.error(error)
    }
  
}