interface news {
    name:string;
    article:string;
    id:number;
}


const imageClick = document.querySelectorAll(".main__container");

if(imageClick){
    imageClick.forEach((img, index)=>{
        img.addEventListener("click", ()=>{
            getArticels(index)
        })
        
    })
}


function getArticels(index){
    try {
     fetch("/articles") 
     .then(res=> res.json())
     .then(({ articles })=>{
        renderArticles(articles, index); 

   }) 
     
      } catch (error) {
       console.error(error) 
    }
}

function renderArticles(articles: news[], index){

   if(index <= 0){
        const html = articles.map(news =>{
        console.log(news.article)
        return `<h1 class="pNewName">${news.name}</h1>`
            //    <p id="newNews">${news.article[1]}</p>`
 }).join(" ");
    
      const usersElement = document.querySelector(".newcont");
       if(usersElement){
        usersElement.innerHTML = html;
       }
   }

   else if(index <= 1){
    console.log("11111111")
   }


    else if(index <=2){
  console.log("222222")
    }

}

