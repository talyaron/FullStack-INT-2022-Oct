

// function getItemsFromStorage(){
//     try {
//       const postsString = localStorage.getItem("posts");
//       if (!postsString) throw new Error("Couldn't find items in storage");
//       const items = JSON.parse(postsString);  
//       render(items)
//     } 
//     catch (error) {
//       console.error(error);
//     }
//   }

  function getUserFromStorage(){
    try {
      const postsString = localStorage.getItem("users");
      if (!postsString) throw new Error("Couldn't find items in storage");
      const users = JSON.parse(postsString);  
      return(users)

    } 
    catch (error) {
      console.error(error);
      return(undefined)
    }
  }

  