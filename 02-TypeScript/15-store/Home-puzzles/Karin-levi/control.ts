
function handleAddItem(ev: any) {
    try {
        ev.preventDefault();

        console.log(ev);

        const name = ev.target.elements.name.value;
        const address = ev.target.elements.address.value;
        const email = ev.target.elements.email.value;
        const phone = ev.target.elements.phone.value;
        const password = ev.target.elements.password.value;
        const preferdColor = ev.target.elements.preferdColor.value;

        ev.target.reset();
        console.log(name, address, email, phone, password, preferdColor)
    } catch (error) {
        console.error(error);
    }
}