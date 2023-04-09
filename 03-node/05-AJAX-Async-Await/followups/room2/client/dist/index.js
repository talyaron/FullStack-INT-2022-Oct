var uidButton = document.querySelector("#uidBtn");
uidButton.addEventListener("click", function () {
    try {
        var uidElement_1 = document.querySelector("#result");
        if (!uidElement_1)
            throw new Error("no uid!");
        fetch("/getuid").then(function (response) { return response.json(); }).then(function (data) {
            try {
                var uid = data.uid;
                if (!uid)
                    throw new Error("no uid");
                uidElement_1.innerText = uid;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
});
