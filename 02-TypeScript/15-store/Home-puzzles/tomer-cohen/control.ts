const forma = document.querySelector(`#theForm`)

function accountInfo(ev:any) {
    try {
        ev.preventDefault();
        const name= ev.target.elements.name.value;
        const address= ev.target.elements.address.value;
        const email= ev.target.elements.email.value;
        const phone= ev.target.elements.phone.value;
        const password= ev.target.elements.password.value;
        const favoriteColor= ev.target.elements.favoriteColor.value;

        userinfo.push(new user(name,address,email,phone,password,favoriteColor));
        console.log(user);
        ev.target.reset();
    } catch (error) {
        console.error(error)
    }
}
function ChangerColor(ev) {
    try {
      console.log(ev);
      const color = ev.target.value;
      document.body.style.backgroundColor = color;
    } catch (error) {
      console.error(error);
    }
  }
