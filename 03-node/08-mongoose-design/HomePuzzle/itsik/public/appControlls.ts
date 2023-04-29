function renderListNavBar(){
    try {
        const listed = document.querySelectorAll("li")
        if(!listed) throw new Error ("cant find navbar lists")
        listed.forEach((list)=>{
         list.addEventListener("click", activeListBar)  
        })

    } catch (error) {
        console.error(error)
    } 
   }

   
   function activeListBar(){
      if(this.id == 1){
       renderToBorad()
      }
       else if(this.id == 2){
        renderToExplain()
      }
       else if(this.id == 3){
        renderToAddStudent()
      }
       else if(this.id == 4){
        renderToAddPro()
      }
       else if(this.id == 5){
        renderToAddGrade()
      }
       else if(this.id == 6){
        renderToAddTeacher()
      }
  
     }


    //  renders

    function renderToBorad(){
      htmlLogBorad()
    }

    function  renderToExplain(){
      htmlExplain()
    }

    function  renderToAddStudent(){
      htmlAddStudent()
    }

    function renderToAddPro(){
      htmlAddPro()
    }

    function renderToAddGrade(){
      htmlAddGrade()
    }

    function renderToAddTeacher(){
      htmlAddTeacher()
    }

