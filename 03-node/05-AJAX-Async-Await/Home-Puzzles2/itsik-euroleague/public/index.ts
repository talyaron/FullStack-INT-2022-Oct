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
        console.log(articles)
        renderArticles(articles, index); 

   }) 
     
      } catch (error) {
       console.error(error) 
    }
}

function renderArticles(articles: news[], index){
            
          const html = `<h1 class="pNewName">${articles[index].article}</h1>`
            //    <p id="newNews">${news.article[1]}</p>`
 
         
      const usersElement = document.getElementById(`'${index}'`);
       if(usersElement){
        usersElement.innerHTML = html;
       }
   }

  



