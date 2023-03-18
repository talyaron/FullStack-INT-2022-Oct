

function delayStartTree() {
    const containerTree: HTMLDivElement = document.querySelector(".home-container__container-img")!;
    containerTree.style.opacity = "0";
    setTimeout(() => {
        containerTree.style.opacity = "1";
    }, 3000);
}


function displayAnimationOnStart() {
    try {

        const treeContainer: HTMLDivElement = document.querySelector('.loading-ani')!;
        setTimeout(() => {
            treeContainer.classList.remove('active')
        }, 1500)

    } catch (error) {
        console.error(error);
    }
}

// function handleJoinNow() {



// }

function animateListMenu() {
    const list = document.querySelectorAll('.home-container__nav-list')!;
    list.forEach((l, i) => {
        const li = l! as HTMLElement;

        if (i === 0) {
            setTimeout(() => {
                li.style.visibility = "visible"
            }, 1500);

        } else if (i === 1) {
            setTimeout(() => {
                li.style.visibility = "visible"
            }, 2500);

        } else if (i === 2) {
            setTimeout(() => {
                li.style.visibility = "visible"
            }, 3500);

        } else if (i === 3) {
            setTimeout(() => {
                li.style.visibility = "visible"
            }, 4500);

        }


    })
}

function handleClickDesign() {
    const html = `   
        <span class="design-name">Orel Karako</span> <p> Website Designer </p>
    <span class="design-name">Yoram Carmeli</span> <p> Website Engine </p>
    <span class="design-name">Tal Course</span> <p> SuperMan Programmer </p>
    `

    const containerIMG: HTMLElement = document.querySelector('.home-container__container-img')!;

    containerIMG.style.top = "40%"

    fillDivInElements("desMenuRoot", html)
    renderMenuContainer("DESIGNERS");
}

function handleClickProjects() {
    const containerIMG: HTMLElement = document.querySelector('.home-container__container-img')!;
    const desMenu: HTMLElement = document.querySelector('.container-desMenu')!;
    containerIMG.style.top = "20%"

    const html = `   
    <div class="container-img" >
    <div  id="projects">
        <img width="250px" src="./img/project/project1.png" alt="">
        <caption>ProList Web Lists Images</caption>
    </div>   
    <div  id="projects">
    <img width="250px" src="./img/project/project2.png" alt="">
    <caption>Balloons pop Game to 2023 new Years</caption>
</div>   
<div  id="projects">
<a href="/project1.html"> 

<img width="250px" src="./img/project/project1.png" alt="">
</a>
<caption>ProList Web Lists Images</caption>
</div>   
    </div>

`
    fillDivInElements("desMenuRoot", html)
    renderMenuContainer("PROJECTS");
}

function handleClickSkills() {
    const imgDiv: HTMLDivElement = document.querySelector('.home-container__container-img-desMenu')!;
    imgDiv.style.width = "950px"
    const html = `   
    <dl>
    <dt>
      Browser market share June 2015
    </dt>
    <dd class="percentage percentage-95"><span class="text">HTML5 : 95%</span></dd>
    <dd class="percentage percentage-80"><span class="text">CSS5 : 80%</span></dd>
    <dd class="percentage percentage-70"><span class="text">TypeScript: 70%</span></dd>
    <dd class="percentage percentage-10"><span class="text">NodeJs: 10%</span></dd>

  </dl>

`
    fillDivInElements("desMenuRoot", html)
    renderMenuContainer("GALLERY");
}

function handleClickMore() {


    const html = `   
    
`
    fillDivInElements("desMenuRoot", html)
    renderMenuContainer("MORE")
}

function renderMenuContainer(titles: string) {
    const imgDiv: HTMLDivElement = document.querySelector('.home-container__container-img-desMenu')!;
    const title: HTMLElement = imgDiv.querySelector('h1')!;
    const container: HTMLElement = imgDiv.querySelector('.container-desMenu')!;
    imgDiv.style.display = "block"
    setTimeout(() => {
        imgDiv.style.minHeight = "30vh"
        imgDiv.style.height = "auto"
    }, 2000)
    title.innerText = titles
}


function fillDivInElements(IDrootContainer: string, html: string) {
    const root: HTMLElement = document.getElementById(IDrootContainer)!;
    root.innerHTML = html
}

animateListMenu()
displayAnimationOnStart()
delayStartTree()