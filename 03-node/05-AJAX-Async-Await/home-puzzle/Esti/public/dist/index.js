var btn = document.querySelector("#btn");
if (btn) {
    btn.addEventListener("click", function () {
        try {
            fetch("/esti")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                try {
                    var text = data.text;
                    document.querySelector("#dogs").textContent = text;
                    console.log(text);
                }
                catch (error) {
                    console.error(error);
                }
            });
            console.log("end");
        }
        catch (error) {
            console.error(error);
        }
    });
}
;
