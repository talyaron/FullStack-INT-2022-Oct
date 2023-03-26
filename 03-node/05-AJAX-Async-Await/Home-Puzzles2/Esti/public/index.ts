

interface FoodTips {
    header: string,
    photo: string,
    tip: string,  
}

renderFoodTips()
async function renderFoodTips(){
    try {
        const food = fetch('/foodTips')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                const  foodTip: FoodTips [] = data;

                console.log( (foodTip) )      
                if(!food) throw new Error ("Don't have detail selected")     
                
                 const html = foodTip
                    .map((tips) => {
                        return `<div class="foodTips">
                        <p>${tips.header}</p>
                        <img src=${tips.photo} alt="food image">
                        <p>${tips.tip}</p>
                        </div>`;
                    })
                      .join(" ");
        
      const tipsElement = document.querySelector("#container");
      if (!tipsElement) throw new Error("coundnt find tips element on DOM");
  
      tipsElement.innerHTML = html;
    })
        // const randomImageIndex = Math.floor(Math.random() * imageBreedList.length);
        // dogImage.src = imageBreedList[randomImageIndex];
    } catch (error) {
        console.error(error)        
    }
}
  


