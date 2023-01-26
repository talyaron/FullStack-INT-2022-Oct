//פונקציות
var form = document.querySelector("registration-form");
var namNodeListOftype = document.querySelectorAll("name");
function addEventListener(event) {
    try {
        event.preventDefault();
        var name = event.target.element.name.value;
        var city = event.target.element.city.value;
        var email = event.target.element.email.value;
        var phone = event.target.element.phone.valueAsNumber;
        var password = event.target.element.password.value;
        var color = event.target.element.color.value;
        titel.push(new Titel(name, city, email, phone, password, color));
        console.log(Titel);
        event.target.reset();
        console.log(name);
        // if (!name || !email || !phone || !city) {
        //     throw new Error("Please fill out all fields.");
        //   }
        //   alert("Form submitted successfully!");
        // } catch (error) {
        //   console.error(error);
        //   alert(error.message);
        // }
    }
    catch (error) {
        console.error(error);
    }
}
