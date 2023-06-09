function getDeliveryDetails() {
    try {
        alert("ברוך הבא לוולט!");
        var name = prompt("מה השם המלא שלך?");
        var city = prompt("לאיזה עיר המשלוח?");
        var address = prompt("לאיזה כתובת המשלוח?");
        var phone = prompt("מה הנייד ליצירת קשר?");
        if (name && city && address && phone) {
            usersDetails.push(new deliveryDetails(name, city, address, phone));
            return usersDetails;
        }
        else
            throw new Error("");
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var userBtn = document.querySelector(".user_icon");
var all = document.querySelector(".all");
var detailspge = document.querySelector(".details");
userBtn === null || userBtn === void 0 ? void 0 : userBtn.addEventListener("click", function () {
    if (all) {
        if (all.style.display === "block" && detailspge) {
            all.style.display = "none";
            detailspge.innerHTML = "\n   <h1>\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7</h1>\n   <p>\u05E9\u05DD \u05DE\u05DC\u05D0:'" + usersDetails[0].fullName + "' <br>\n   \u05E2\u05D9\u05E8 \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7: '" + usersDetails[0].city + "'<br>\n  \u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D9\u05E8\u05D4: '" + usersDetails[0].address + "'<br>\n  \u05E4\u05DC\u05D0\u05E4\u05D5\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8: '" + usersDetails[0].phone + "'</p>\n  ";
        }
        else
            newPage.style.display = "block";
        detailspge.style.display = "none";
    }
});
