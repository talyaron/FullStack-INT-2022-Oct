var container = document.querySelector(".container");
var showHidePw = document.querySelectorAll(".showHidePw");
var pwInputs = document.querySelectorAll(".input-password");
showHidePw.forEach(function (eyeIcon) {
    eyeIcon.addEventListener("click", function () {
        pwInputs.forEach(function (pwInput) {
            if (pwInput.type === "password") {
                console.log("text");
                pwInput.type = "text";
                showHidePw.forEach(function (icon) {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            }
            else {
                pwInput.type = "password";
                showHidePw.forEach(function (icon) {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});
//-----Registeration
function register(ev) {
    try {
        ev.preventDefault();
        var fullname = ev.target.elements.fullname.value;
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        if (!fullname)
            throw new Error("No fullname found");
        if (!email)
            throw new Error("No email found");
        if (!password)
            throw new Error("No password found");
        var newUser = { fullname: fullname, email: email, password: password };
        //Send to server
        fetch("/api/users/register", {
            method: 'POST',
            //כותרות - מציינות את סוג הנתונים בגוף הבקשה ואת סוג הנתונים המצפים להתקבל בתגובה
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //מכיל את הפרמטרים שנשלחו בבקשה וממיר למחרוזת ג'ייסון
            body: JSON.stringify(newUser)
            /*
                לאחר קבלת התגובה מהשרת, הקוד ממיר את התוכן לפורמט ג'ייסון
                ומדפיס את הנתונים בטרמינל.
                במידה והבקשה תכשל, תודפס שגיאה בטרמינל.
            */
        }).then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
//-----login
function login(ev) {
    try {
        ev.preventDefault();
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        if (!email)
            throw new Error("No email found");
        if (!password)
            throw new Error("No password found");
        //Send to server
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        }).then(function (res) { return res.json(); })
            .then(function (data) { console.log(data); })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
