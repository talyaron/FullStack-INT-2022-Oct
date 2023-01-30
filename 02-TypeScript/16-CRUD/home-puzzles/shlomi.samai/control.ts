function handleAddItem(ev) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const address = ev.target.elements.address.value;
    const email = ev.target.elements.email.value;
    const phone = ev.target.elements.phone.valueAsNumber;
    const password = ev.target.elements.password.value;
    const preferedColor = ev.target.elements.preferedColor.value;
    const pictureURL = ev.target.elements.pictureURL.value;

    people.push(
      new Person(
        name,
        address,
        email,
        phone,
        password,
        preferedColor,
        pictureURL
      )
    );
    ev.target.reset();
    render();
  } catch (error) {
    console.error(error);
  }
}

function render() {
  let page = "";
  let j = 0;
  for (j = 0; j <= people.length - 1; j++) {
    page += `<div class="list"> 
            <h3>${people[j].name}</h3>
            <h3>${people[j].address}</h3>
            <h3>${people[j].email}</h3>
            <h3>${people[j].phone}</h3>
            <h3>${people[j].password}</h3>
            <h3>${people[j].preferedColor}</h3>
            <h3>${people[j].uid}</h3>
            <button onclick="handleDeleteItem('${people[j].uid}')">Remove</button>       
            <img src='${people[j].pictureURL}'/>
            </div>`;
  }
  console.log(page);
  const html: HTMLDivElement | null = document.querySelector("#list");
  if (html !== null) {
    html.innerHTML = page;
    console.log(html);
  }
}

function handleDeleteItem(uid: string) {
  try {
    debugger;
    console.log(uid);
    const index = people.findIndex((Person) => Person.uid === uid);
    if (index === -1) throw new Error("item not found");
    people.splice(index, 1);
    render();
   
    
  } catch (error) {
    console.error(error);
  }
}