
const uidButton = document.querySelector("#uidBtn") as HTMLElement;

uidButton.addEventListener("click",()=>{
try {
    const uidElement:HTMLElement | null = document.querySelector("#result")
    if(!uidElement) throw new Error("no uid!");
    fetch("/getuid").then((response)=> response.json()).then((data)=>{
        try {
            const { uid } = data;
            if(!uid) throw new Error("no uid");
            uidElement.innerText = uid;
            
        } catch (error) {
            console.error(error);
        }
    })
} catch (error) {
    console.error(error);
}
})