function createAccount() {
    try {
        var userName = prompt("please enter your User Name");
        var userPassword = prompt("please enter your Password");
        var userEmail = prompt("please enter your Email Address");
        if (!userName || !userPassword || !userEmail)
            throw new Error("error");
        user.push(new Users(userName, userPassword, userEmail));
    }
    catch (error) {
        console.error(error);
    }
}
var addfriend = document.querySelector("#addFriends");
function friendsBtn() {
    try {
        document.getElementById("addFriends").innerHTML = "";
        document.getElementById("addFriends").innerHTML = "\n          <ul>\n          <li>ROY2000(#32556)</li> <br>\n          <li>kilerGameing(#14596)</li> <br>\n          <li>Sports(#585)</li> <br>\n          <li>School(#4896)</li>\n        </ul>";
    }
    catch (error) {
        console.log(error);
    }
}
