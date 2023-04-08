function addArticle(e) {
    try {
        e.preventDefault();
        var name = e.target.elements.articleName.value;
        var articleDesctiption = e.target.elements.articleDesctiption.value;
        var imageURL = e.target.elements.imageURL.value;
        var newarticale = { name: name, articleDesctiption: articleDesctiption, imageURL: imageURL };
        if (!newarticale || name == '' || articleDesctiption == '')
            throw new Error("No articale data");
        fetch("/api/add-articale", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newarticale)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.ok == false) {
                throw new Error("Couldn't add articale");
            }
            else {
                getArticles();
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function getArticles() {
    try {
        fetch("/api/get-articales")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articales = _a.articales;
            try {
                if (!articales)
                    throw new Error("didn't find any articals");
                renderArticales(articales);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) { }
}
function renderArticales(articalesArray) {
    try {
        console.log(articalesArray);
        var articalesContainer = document.querySelector("#articales_container");
        if (!articalesContainer)
            throw new Error("Couldn't catch articalesContainer");
        articalesContainer.innerHTML = '';
        for (var i = 0; i < articalesArray.length; i++) {
            articalesContainer.insertAdjacentHTML("beforeend", "<div class=\"articaleCard\" id=\"articale-" + articalesArray[i].uid + "\"><h1 onchange=\"editArticale('" + articalesArray[i].uid + "')\" contenteditable>" + articalesArray[i].name + " </h1><p contenteditable>" + articalesArray[i].articleDesctiption + "</p> <img src=\"" + articalesArray[i].imageURL + "\"></div>");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function editArticale(uid) {
    try {
        console.log('edit!');
        var articale = document.querySelector("#articale-" + uid);
        if (!articale)
            throw new Error("No articale data");
        console.log(articale);
        // fetch("/api/add-articale", {
        //     method: "UPDATE",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(articale),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.ok == false) {
        //             throw new Error("User already exists");
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    catch (error) {
        console.error(error);
    }
}
