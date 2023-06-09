const form = document.querySelector("registration-form");
const namNodeListOftype = document.querySelectorAll("name");



function handleFormSubmit(ev) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const city = ev.target.elements.city.value;
        const email = ev.target.elements.email.value;
        const phone = ev.target.elements.phone.valueAsNumber;
        const password = ev.target.elements.password.value;
        const color = ev.target.elements.color.value;
        const form = new Form(name, city, email, phone, password, color);
        forms.push(form);
        console.log(form);
    } catch (error) {
        console.error(error)
    }
}


