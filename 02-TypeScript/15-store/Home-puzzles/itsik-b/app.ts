function startForm(){

 // creat  the Form -> from zero 
const dive = document.createElement("div") as HTMLDivElement;   
const form = document.createElement("form")as HTMLFormElement;
const lineH2 = document.createElement("h2")as HTMLHeadElement;
const firstLabel = document.createElement("label")as HTMLLabelElement;
const firstInput = document.createElement("input")as HTMLInputElement;
const secondLabel = document.createElement("label")as HTMLLabelElement;
const secondInput = document.createElement("input")as HTMLInputElement;
const thirdLabel = document.createElement("label")as HTMLLabelElement;
const thirdInput = document.createElement("input")as HTMLInputElement;
const forthLabel = document.createElement("label")as HTMLLabelElement;
const forthInput = document.createElement("input")as HTMLInputElement;
const fifthhLabel = document.createElement("label")as HTMLLabelElement;
const fifthhInput = document.createElement("input")as HTMLInputElement;
const sixthLabel = document.createElement("label")as HTMLLabelElement;
const sixthInput = document.createElement("input")as HTMLInputElement;
const seventhLabel = document.createElement("label")as HTMLLabelElement;
const seventhInput = document.createElement("input")as HTMLInputElement;
const submitBtn = document.createElement("button")as HTMLButtonElement;

// append all new stuff
document.body.appendChild(dive);
dive.appendChild(form);
form.appendChild(lineH2);
form.appendChild(firstLabel);
form.appendChild(firstInput);
form.appendChild(secondLabel);
form.appendChild(secondInput);
form.appendChild(thirdLabel);
form.appendChild(thirdInput);
form.appendChild(forthLabel);
form.appendChild(forthInput);
form.appendChild(fifthhLabel);
form.appendChild(fifthhInput);
form.appendChild(sixthLabel);
form.appendChild(sixthInput);
form.appendChild(seventhLabel);
form.appendChild(seventhInput);
form.appendChild(submitBtn);


// set style
lineH2.innerHTML = "Register Here:";
// 1
firstLabel.innerHTML = "Enter Name:";
firstInput.required;
firstInput.type="text";
firstInput.placeholder = "enter your name";
firstInput.style.fontSize = "14px";
firstInput.name = "name";
// 2

secondLabel.innerHTML = "address:";
secondInput.required;
secondInput.type="text";
secondInput.placeholder = "enter your address";
secondInput.name ="address";
// 3
thirdLabel.innerHTML = "Email:";
thirdInput.required;
thirdInput.placeholder = "enter email";
thirdInput.type = "email";
thirdInput.name = "email";
// 4
forthLabel.innerHTML = "Phone:";
forthInput.required;
forthInput.type = "number";
forthInput.placeholder = "phone number";
forthInput.name = "phone";
// 5
fifthhLabel.innerHTML = "Password:";
fifthhInput.required
fifthhInput.type = "password"
fifthhInput.placeholder = "enter password here"
fifthhInput.name = "password"
// 6
sixthLabel.innerHTML = "Prefferd-Color:";
sixthInput.type = "color";
sixthInput.name = "precolor"
sixthInput.addEventListener("input", ()=>{
  document.body.style.backgroundColor = sixthInput.value 

})
 // 7
seventhLabel.innerHTML = "Add-Image"
seventhInput.type = "file"
seventhInput.name = "file"
// button
submitBtn.textContent = "Send Form"
submitBtn.addEventListener("click", userSubmit) 



}


