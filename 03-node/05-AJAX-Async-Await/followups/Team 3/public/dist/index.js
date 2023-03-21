function handleClickBTN() {
    var resultNumber = document.getElementById('randomNum');
    fetch("/random")
        .then(function (response) { return response.json(); })
        .then(function (data) { return resultNumber.innerText = "THE NUMBER " + data.number; });
}
