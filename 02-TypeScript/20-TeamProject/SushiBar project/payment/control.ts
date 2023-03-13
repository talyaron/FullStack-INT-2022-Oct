function goToHomePage() {
  try {
    if (!homeLink) throw new Error(`We can't show the customer page`);
    homeLink.click();
  } catch (error) {
    console.error(`The system failed`);
  }
}
function calculateTotalOrder(){
  try {
    const cartStr = localStorage.getItem('cart');
    if (!cartStr) {
      throw new Error(`We can't show the customer page`);
    }
    const cartObj = JSON.parse(cartStr);
    let sum = 0;
        Object.entries(cartObj).forEach(([itemName, item]) => {
            sum += item.price * item.quantity
        });
        if (!total) {
          throw new Error(`We can't show the customer page`);
        }
        total.innerHTML=` Total to pay: ${sum} ILS `;
  } catch (error) {
    console.error(`we can not show the total to pay`)
  }
}
function takeawayChecked(): void {
  if (!adress || !restaurantSelectList)
    throw new Error(`there is no payment form`);
  restaurantList.map((element, key) => {
    restaurantSelectList[key] = new Option(
      element.name + ", " + element.address,
      element.name
    );
  });
  restaurantSelectList.style.display = `block`;
  adress.innerHTML = `  
  <input type="submit" value="Next" class="btn">`;
}

function deliverChecked() {
  if (!adress || !restaurantSelectList)
    throw new Error(`there is no payment form`);
  restaurantSelectList.style.display = `none`;
  adress.innerHTML = `
    <input type="text" name="customerAdress" class="input" placeholder="Enter your full adress" required/>
    <input type="submit" value="Next" class="btn">
    `;
}

function showPaymentForm(e): void {
  try {
    e.preventDefault();
    if (!paymentChoice) throw new Error(`there is no payment form`);
    paymentChoice.innerHTML = `
    <input type="radio" name="payment" class="input" id="option1" onclick="visaCardChecked()"/>
    <label for="choice1">Visa Card</label>
    <input type="radio" name="payment" class="input" id="option2" onclick="cashChecked()"/>
    <label for="choice2">Cash</label>
    `;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function visaCardChecked() {
  try {
    if (!paymentDetail) throw new Error(`there is no payment form`);
    paymentDetail.innerHTML = `
        <div class="cardDetails">
        <input type="text" name="cardNumber" class="input" id="cardNumber" minlength = "16" maxlength = "16" placeholder="Enter your card number" required/>
        <input type="month" name="cardExpired" class="input" id="cardEDate" min="2023-03" max="2033-12" required/>
        <input type="text" name="cardCvv" class="input" id="cardCvv" minlength = "3" maxlength = "3" placeholder="Enter your cvv number" required/>
        <input type="text" name="customerId" class="input" id="id" minlength = "9" maxlength = "9" placeholder="Enter your id number" required/>
        </div>
        <input type="submit" value="Pay" class="btn">
        `;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function cashChecked() {
  try {
    if (!paymentDetail) throw new Error(`there is no payment form`);
    paymentDetail.innerHTML = `<input type="submit" value="Pay" class="btn">`;
  } catch (error) {
    console.error(`something don't work with the load of the customer details`);
  }
}

function pay(event): void {
  try {
    event.preventDefault()
    alert('Thank You For Your Command');
   localStorage.removeItem('cart');
    goToHomePage();
} catch (error) {
    console.error(`The system failed`);
}
}
