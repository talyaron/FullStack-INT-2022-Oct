let popUp:HTMLDivElement | null = document.querySelector("#popup");

function openPopup(){
    popUp?.classList.add("open-popup");

}
function closePopup(){
    popUp?.classList.remove("open-popup");
    
}
openPopup();
closePopup();