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

function renderArticles(articles:news[], index){
            
     console.log(articles[index].article)
    
     const html = `<a href="${articles[index].article}"></a>`   
       
        const usersElement = document.getElementById(`"${index}"`);
       if(usersElement){
        usersElement.innerHTML = html
       }
   }

  



