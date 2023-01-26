function renderContacts() {
    try {
        const contactData: HTMLDivElement | null = document.querySelector("#contactData");
        if (contactData) {
            for (let i = allContactsArray.length - 1; i < allContactsArray.length; i++) {
                const contact = document.createElement("div");
                contact.innerHTML = `
          <div class="results__contact">
              <div class="results__contact__wrapper">
                <span>Name: ${allContactsArray[i].firstName} </span>
                <span>Ser Name: ${allContactsArray[i].serName} </span>
                <span>Mobile: ${allContactsArray[i].mobileNumber} </span>
                <span>E-mail: ${allContactsArray[i].email} </span>
              </div>
              <div id="contactImage-${allContactsArray[i].mobileNumber}" class="image"></div> 
          </div>`;

                document.querySelector("#contactData")?.appendChild(contact);

                // document.getElementById("customimage").onchange = function(e: Event) {
                //     let file = (<HTMLInputElement>e.target).files[0];

                const contactImage: HTMLElement | null = document.querySelector(`#contactImage-${allContactsArray[i].mobileNumber}`)
                if (contactImage) contactImage.style.backgroundImage = "url("+ URL.createObjectURL(event?.target?.files[i]) +")";
                // if (contactImage) contactImage.style.backgroundColor = "red";
            }
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}




function search(): void {
    try {
        const userInput: Element | null = document.querySelector("#userInput");
        const noResults: HTMLDivElement | null = document.querySelector("#noResults");

        userInput?.addEventListener("input", (search) => {
            let userInputValue = (search.target as HTMLInputElement).value
            userInputValue = userInputValue.toLocaleLowerCase();

            let results = document.querySelectorAll<HTMLElement>(".results__contact");
            for (let i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    results[i].style.display = "";
                    noResults.style.display = "none";
                } else {
                    results[i].style.display = "none";
                }
            }

            let allContacts = document.querySelectorAll<HTMLElement>(".results");
            for (let i = 0; i < results.length; i++) {
                if (!allContacts[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    noResults.style.display = "";
                    noResults.innerHTML = `Sorry, there isn't a contact that icludes <u><b>${userInputValue}</b></u> on our store...`;
                }
            }
        }
        );
    } catch (error) {
        console.error(error);
        return error;
    }
}



function handleAddContact(ev: any) {
    try {
        ev.preventDefault();

        const firstName = ev.target.elements.firstName.value;
        const serName = ev.target.elements.serName.value;
        const mobileNumber = ev.target.elements.mobileNumber.value;
        const email = ev.target.elements.email.value;

        allContactsArray.push(new Contact(firstName, serName, mobileNumber, email));

        ev.target.reset();

    } catch (error) {
        console.error(error);
    }

}

