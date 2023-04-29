function handleAddUser(ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var fname = ev.target.elements.fname.value;
    var phone = ev.target.elements.phone.value;
    var email = ev.target.elements.email.value;
    var newStudent = { name: name, fname: fname, phone: phone, email: email };
    console.log(newStudent);
}
