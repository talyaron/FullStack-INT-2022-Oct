interface News {
    name:string;
    src:string;
    // link:string;
    
}



function handleGetNews(){
    console.log("test")
    try {
       fetch("/api/get-news") 
       .then((res)=> res.json())
       .then(({news})=> {
        try {
            if(!news)throw new Error ("didnt find news");
            console.log(news);
            renderNews(news);
            
        } catch (error) {
            console.error(error)
        }
       });
    } catch (error) {
        console.error(error)
    }
}


function renderNews(news:News[]){
    try {
       if(!news) throw new Error ("No news")

       const html = news.map((news) => {
        return `<div class= "newsCard">
        <img src ="${news.src}" alt ="neus name is ${news.name}">
       
        <div>`;
        
       })
       .join(' ');
        const newsElement = document.querySelector("#news");
      if(!newsElement)throw new Error("coundnt find user element on DOM");

      newsElement.innerHTML =html; 
    } catch (error) {
        console.error(error)
    }
}
function handleAddNews(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const src = ev.target.elements.src.value;
        if(!name)throw new Error("No name");
        if(!src)throw new Error("No src");
        const newNews:any ={name,src};
        
        //send to server
        
        fetch("/api/add-news",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(newNews),
        })
        .then((res)=> res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error)=>{
            console.error(error)
        });
        
    } catch (error) {
        console.error(error);
    }
}