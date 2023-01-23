function winCon() {
    try {
        //unreadable but works
        if ((playerInput[0].innerHTML == playerInput[1].innerHTML && playerInput[1].innerHTML == playerInput[2].innerHTML) || (playerInput[3].innerHTML == playerInput[4].innerHTML && playerInput[3].innerHTML == playerInput[5].innerHTML) || (playerInput[6].innerHTML == playerInput[7].innerHTML && playerInput[7].innerHTML == playerInput[8].innerHTML) || (playerInput[0].innerHTML == playerInput[4].innerHTML && playerInput[4].innerHTML == playerInput[8].innerHTML) || (playerInput[2].innerHTML == playerInput[4].innerHTML && playerInput[4].innerHTML == playerInput[6].innerHTML) || (playerInput[0].innerHTML == playerInput[3].innerHTML && playerInput[3].innerHTML == playerInput[6].innerHTML) || (playerInput[1].innerHTML == playerInput[4].innerHTML && playerInput[4].innerHTML == playerInput[7].innerHTML) || (playerInput[2].innerHTML == playerInput[5].innerHTML && playerInput[5].innerHTML == playerInput[8].innerHTML)) {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
}
function reload() {
    alert("reload");
    location.reload();
}
