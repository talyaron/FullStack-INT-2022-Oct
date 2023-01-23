const upBox: any= document.querySelector(".box")

upBox.addEventListener("click", alertMsg)

function alertMsg(){
 alert("You pressed me!")
}

const chessBox1: any = document.querySelector(".chessBox1")
chessBox1.addEventListener("click", chessImg1, true)
function chessImg1(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox1.appendChild(chessImag)
    chessBox1.removeEventListener("click", chessImg1, true)
}

const chessBox2: any = document.querySelector(".chessBox2")
chessBox2.addEventListener("click", chessImg2, true)
function chessImg2(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox2.appendChild(chessImag)
    chessBox2.removeEventListener("click", chessImg2, true)
}

const chessBox3: any = document.querySelector(".chessBox3")
chessBox3.addEventListener("click", chessImg3, true)
function chessImg3(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox3.appendChild(chessImag)
    chessBox3.removeEventListener("click", chessImg3, true)
}
const chessBox4: any = document.querySelector(".chessBox4")
chessBox4.addEventListener("click", chessImg4, true)
function chessImg4(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox4.appendChild(chessImag)
    chessBox4.removeEventListener("click", chessImg4, true)
}
const chessBox5: any = document.querySelector(".chessBox5")
chessBox5.addEventListener("click", chessImg5, true)
function chessImg5(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox5.appendChild(chessImag)
    chessBox5.removeEventListener("click", chessImg5, true)
}
const chessBox6: any = document.querySelector(".chessBox6")
chessBox6.addEventListener("click", chessImg6, true)
function chessImg6(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox6.appendChild(chessImag)
    chessBox6.removeEventListener("click", chessImg6, true)
}
const chessBox7: any = document.querySelector(".chessBox7")
chessBox7.addEventListener("click", chessImg7, true)
function chessImg7(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox7.appendChild(chessImag)
    chessBox7.removeEventListener("click", chessImg7, true)
}
const chessBox8: any = document.querySelector(".chessBox8")
chessBox8.addEventListener("click", chessImg8, true)
function chessImg8(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox8.appendChild(chessImag)
    chessBox8.removeEventListener("click", chessImg8, true)
}
const chessBox9: any = document.querySelector(".chessBox9")
chessBox9.addEventListener("click", chessImg9, true)
function chessImg9(){
    let chessImag = document.createElement("img")
    chessImag.src = chessImages[getRandomImg()]
    chessBox9.appendChild(chessImag)
    chessBox9.removeEventListener("click", chessImg9, true)
}
const resetBtn = document.querySelector("#resetBtn")
resetBtn?.addEventListener("click", resetBtnFunction)

function resetBtnFunction(){
    location.reload()
}