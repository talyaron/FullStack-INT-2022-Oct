//-----Toggle SideMenu-----//
let navBar = document.querySelector("nav") as HTMLElement
let myNav = document.getElementById("nav-bar") as HTMLElement
let navLinks = myNav.querySelectorAll("li")
let hamMenu = document.getElementById("ham-menu") as HTMLElement

hamMenu.addEventListener("click", ()=>{
    myNav.classList.toggle("active") //פתיחת תפריט בכל לחיצה על ההמבורגר
    hamMenu.classList.toggle("fa-times") //הופך את האייקון של ההמבורגר לאיקס לאחר הקליק
})

navLinks.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        myNav.classList.remove("active") //בכל לחיצה על אחד מכפתורי התפריט, התפריט נעלם
        hamMenu.classList.toggle("fa-times") //לחיצה על אחד מלחצני התפריט ישנה את האייקון את האיקס בחזרה לאייקון של ההמבורגר
    })
})

//-----Scroll to top button-----//
let scrollTopButton = document.getElementById("scroll-top-btn") as HTMLElement
scrollTopButton.addEventListener("click", ()=>{
    document.documentElement.scrollTop = 0
})

//-----Gallery Script-----//
let galleryConteiner = document.querySelector(".gallery-container") as HTMLElement

for(let i = 0; i < gallery.length; i++){
    const img = document.createElement("img") as HTMLImageElement
    img.src = gallery[i].src
    galleryConteiner.appendChild(img)
}


