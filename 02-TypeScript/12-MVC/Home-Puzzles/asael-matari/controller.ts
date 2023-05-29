
function getDeliveryDetails(): deliveryDetails[] | false {
  try {
    alert("ברוך הבא לוולט!");
    const name: string | null = prompt("מה השם המלא שלך?");
    const city: string | null = prompt("לאיזה עיר המשלוח?");
    const address: string | number | null = prompt("לאיזה כתובת המשלוח?");
    const phone: string | null = prompt("מה הנייד ליצירת קשר?");
    if (name && city && address && phone) {
      usersDetails.push(new deliveryDetails(
        name,
        city,
        address,
        phone
        )) ;
        return usersDetails
      } else throw new Error("");
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  
  
  const userBtn = document.querySelector(".user_icon");
  const all = document.querySelector(".all");
  const detailspge = document.querySelector(".details");
  userBtn?.addEventListener("click", () => {
    if (all) {
      if (all.style.display === "block" && detailspge) {
        all.style.display = "none";
        detailspge.innerHTML = `
   <h1>פרטי משלוח</h1>
   <p>שם מלא:'${usersDetails[0].fullName}' <br>
   עיר למשלוח: '${usersDetails[0].city}'<br>
  כתובת דירה: '${usersDetails[0].address}'<br>
  פלאפון ליצירת קשר: '${usersDetails[0].phone}'</p>
  `;
      } else newPage.style.display = "block";
      detailspge.style.display = "none";
    }
  });