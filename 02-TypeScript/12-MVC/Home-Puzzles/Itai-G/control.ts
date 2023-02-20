function createAccount() {
    try {
      const userName = prompt(`please enter your User Name`)
      const userPassword = prompt(`please enter your Password`)
      const userEmail = prompt(`please enter your Email Address`)
      if (!userName || !userPassword || !userEmail) throw new Error(`error`)
      user.push(new Users(userName, userPassword, userEmail))
    } catch (error) {
      console.error(error)
    }
  }
  
  
  
  let addfriend: HTMLHeadingElement | null = document.querySelector(`#addFriends`);
  function friendsBtn() {
      try {
          document.getElementById(`addFriends`)!.innerHTML= ""
          document.getElementById(`addFriends`)!.innerHTML=`
          <ul>
          <li>ROY2000(#32556)</li> <br>
          <li>kilerGameing(#14596)</li> <br>
          <li>Sports(#585)</li> <br>
          <li>School(#4896)</li>
        </ul>`
  
      } catch (error) {
          console.log(error)
      }
    }
  