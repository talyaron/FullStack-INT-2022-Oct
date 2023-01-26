function startForm() {
    // creat  the Form -> from zero 
    var dive = document.createElement("div");
    var form = document.createElement("form");
    var lineH2 = document.createElement("h2");
    var firstLabel = document.createElement("label");
    var firstInput = document.createElement("input");
    var secondLabel = document.createElement("label");
    var secondInput = document.createElement("input");
    var thirdLabel = document.createElement("label");
    var thirdInput = document.createElement("input");
    var forthLabel = document.createElement("label");
    var forthInput = document.createElement("input");
    var fifthhLabel = document.createElement("label");
    var fifthhInput = document.createElement("input");
    var sixthLabel = document.createElement("label");
    var sixthInput = document.createElement("input");
    var seventhLabel = document.createElement("label");
    var seventhInput = document.createElement("input");
    var submitBtn = document.createElement("button");
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
    firstInput.type = "text";
    firstInput.placeholder = "enter your name";
    firstInput.style.fontSize = "14px";
    firstInput.name = "name";
    // 2
    secondLabel.innerHTML = "address:";
    secondInput.required;
    secondInput.type = "text";
    secondInput.placeholder = "enter your address";
    secondInput.name = "address";
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
    fifthhInput.required;
    fifthhInput.type = "password";
    fifthhInput.placeholder = "enter password here";
    fifthhInput.name = "password";
    // 6
    sixthLabel.innerHTML = "Prefferd-Color:";
    sixthInput.type = "color";
    sixthInput.name = "precolor";
    sixthInput.addEventListener("input", function () {
        document.body.style.backgroundColor = sixthInput.value;
    });
    // 7
    seventhLabel.innerHTML = "Add-Image";
    seventhInput.type = "file";
    seventhInput.name = "file";
    // button
    submitBtn.textContent = "Send Form";
}
