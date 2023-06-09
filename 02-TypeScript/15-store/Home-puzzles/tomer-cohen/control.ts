const forma = document.querySelector(`#theForm`)

function accountInfo(ev:any) {
    try {
      
        ev.preventDefault();
        const name= ev.target.elements.name.value;
        const address= ev.target.elements.address.value;
        const email= ev.target.elements.email.value;
        const phone= ev.target.elements.phone.value;
        const password= ev.target.elements.password.value;
        const favoriteColor= ev.target.elements.favoriteColor;

        userinfo.push(new user(name,address,email,phone,password,favoriteColor));
        console.log(userinfo);
        ev.target.reset();
    } catch (error) {
        console.error(error)
    }
}
function ChangerColor(ev) {
    try {
      console.log(ev);
      const favoriteColor = ev.target.value;
      document.body.style.backgroundColor = favoriteColor;
    } catch (error) {
      console.error(error);
    }
  }
