var btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', function () {
        fetch('/room6')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var ;
        });
    });
}
