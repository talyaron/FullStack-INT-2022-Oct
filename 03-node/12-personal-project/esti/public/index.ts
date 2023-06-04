 
function navigateToPage(url: string){
  console.log(url)
  if(url === "login.html"){
    window.location.href = url

  } else {
    backFromGame()
  }
}

// let  playerDetail = ["", "", ""]

function backFromGame(){
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const value = urlParams.get('value');
//   if(!value) throw new Error ("No value from indexuser")
  
//   playerDetail = value.split(",");      
//   handleUpdateScore()
// }


// function handleUpdateScore() {
//   try {
//     console.log(playerDetail)

//     fetch("/api/sorce/update-sorce", {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ playerDetail[0], playerDetail[3] }),
//     })
//     .then((res) => res.json())
//       .then(({ users }) => {
//         renderUsers(users);
//       })
//       .catch((error) => {
//         console.error(error);
//       });;
//   } catch (error) {
//     console.error(error);
//   }
}

