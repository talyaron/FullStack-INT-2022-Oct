//פונקציות

const form = document.querySelector("registration-form");
const namNodeListOftype  = document.querySelectorAll("name");




function addEventListener(event) {
    try {
        event.preventDefault()
        const name = event.target.element.name.value;
        const city = event.target.element.city.value;
        const email = event.target.element.email.value;
        const phone = event.target.element.phone.valueAsNumber;
        const password = event.target.element.password.value;
        const color = event.target.element.color.value;



        titel.push(new Titel(name, city, email, phone, password, color,));
        console.log(Titel)
        event.target.reset()
        console.log(name)

      

        // if (!name || !email || !phone || !city) {
        //     throw new Error("Please fill out all fields.");
        //   }
      
      
        //   alert("Form submitted successfully!");
        // } catch (error) {
        //   console.error(error);
        //   alert(error.message);
        // }





    } catch (error) {
        console.error(error)
    }

}

