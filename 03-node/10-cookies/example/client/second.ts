

async function handleGetUser(){
    try {
      const responce = await  fetch('/api/users/get-user');
      const data = await responce.json();
      console.log(data)
      const {user} = data;
      const userHTML:HTMLDivElement|null = document.querySelector('#username');

      if(!user) throw new Error('didnt get user from DB');
      if(!userHTML) throw new Error('No user element on DOM');
      userHTML.innerText = user.name;

    } catch (error) {
        console.error(error);
    }
}