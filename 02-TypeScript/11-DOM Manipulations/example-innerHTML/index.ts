const title:HTMLHeadingElement|null = document.querySelector("#title")

console.dir(title);
const userName:string | null = prompt("What is you name");

const imageUrl: string | null = prompt('Enter image url')

if(userName && title && imageUrl){
    title.innerHTML = `<div class="card">
        <h1>This is ${userName}'s site</h1>
        <img src='${imageUrl}'/>
        <p class="green">This is the best site ever</p>
    </div>`;
}