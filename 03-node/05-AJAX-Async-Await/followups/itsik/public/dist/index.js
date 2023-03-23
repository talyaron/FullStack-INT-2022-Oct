var btn = document.querySelector("#btn");
if (btn) {
    //event driven coding
    btn.addEventListener("click", function () {
        try {
            //synchonic coding
            console.log("start");
            var result_1 = document.querySelector("#result");
            if (!result_1)
                throw new Error("Couldnt find element result");
            //get number from server
            console.log("get number");
            //rest API
            //asynchronic coding
            //call a server
            fetch("https://api.chucknorris.io/jokes/random", {
                method: 'POST',
                body: { title: 'MyTitle' }
            }) //promise
                .then(function (response) { return response.json(); })
                .then(function (data) {
                try {
                    console.log(data);
                    var id = data.id;
                    // if (!number && number !== 0) throw new Error("Couldnt get number from server");
                    result_1.innerText = id;
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
