var btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    try {
        var result_1 = document.querySelector("#result");
        if (!result_1)
            throw new Error("can't be null");
        fetch("/random-number")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            try {
                console.log(data);
                var number = data.number;
                if (!number && number !== 0)
                    throw new Error("Data can't get number from server");
                result_1.innerText = number;
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
