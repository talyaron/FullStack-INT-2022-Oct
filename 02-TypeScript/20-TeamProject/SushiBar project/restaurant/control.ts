function goToHomePage():void{
    try {
      if (!homeLink) throw new Error(`We can't show the customer page`);
      homeLink.click();
    } catch (error) {
      console.error(`The system failed`);
    }
  }
  
  function showOption():void{
    if (!morePage) throw new Error(`We can't show the option page`);
    morePage.style.display= `inline`;
  }
  
  function closeOption():void{
    if (!morePage) throw new Error(`We can't show the option page`);
    morePage.style.display= `none`;
  }
