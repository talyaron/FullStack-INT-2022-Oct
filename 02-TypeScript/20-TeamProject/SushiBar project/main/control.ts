function goToHomePage() {
  try {
    if (!homeLink) throw new Error(`We can't show the customer page`);
    homeLink.click();
  } catch (error) {
    console.error(`The system failed`);
  }
}

function showOption(){
  if (!morePage) throw new Error(`We can't show the option page`);
  morePage.style.display= `inline`;
}

function closeOption(){
  if (!morePage) throw new Error(`We can't show the option page`);
  morePage.style.display= `none`;
}

function goToCstmrPage() {
  try {
    if (!customerLink) throw new Error(`We can't show the customer page`);
    customerLink.click();
  } catch (error) {
    console.error(`The system failed`);
  }
}