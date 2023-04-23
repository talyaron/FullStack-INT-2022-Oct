// import { log } from "console"
 
// import { log } from "console"

function renderTeacherStudent(divClass: string) : void{
    try {
        let divName = ""
        if(divClass === "Teacher") divName = "teacher";
        if(divClass === "Student") divName = "student";
        
        const html = 
        `
        <div class="singin">
            <button class="goBack" onclick="hendelGoBack()">Go back</button>

            <form class="form" onsubmit="hendelSingIn('${divName}')">
                <input type="text" name="name" placeholder='${divClass} Name' required>
                <input type="password" name="password" placeholder="Password" required>
                <button class="submit">Sing in</button>
            </form>
            <button class="singupBtn" onclick="renderSingUp('${divClass}', event)">Sing Up</button>
        </div>

        `

        console.log(html)
        const container = document.querySelector(".container") as HTMLDivElement
        if(!container) throw new Error('Cotainer div dont in the DOM')
        container.innerHTML = html

    } catch (error) {
        console.error(error)        
    }

}


function renderSingUp(divClass: string) : void{
    try {
            let divName = ""
            if(divClass === "Teacher") divName = "teacher"
            if(divClass === "Student") divName = "student"

    
            const functionName = `hendelAdd${divClass}`
            const html = 
            `
            <div class="${divName}">
                <button class="goBack" onclick="hendelGoBack()">Go back</button>
            
                <form class="form" onsubmit="${functionName}(event)">
                    <input type="text" name="name" placeholder="${divClass} Name"  required>
                    <input type="email" name="email" placeholder="${divClass} Email"  required>
                    <input type="password" name="password" placeholder="Password"  required>
                    <button class="submit">Add ${divName}</button>
                </form>
            </div>
           `
            const container = document.querySelector(".container") as HTMLDivElement
            if(!container) throw new Error('Cotainer div dont in the DOM')
            container.innerHTML = html
        } catch (error) {
            console.error(error)
        }
  }
  