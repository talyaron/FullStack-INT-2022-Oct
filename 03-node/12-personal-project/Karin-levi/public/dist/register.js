function register(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var username = formData.get('username');
    var password = formData.get('password');
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data.success) {
            window.location.href = "./main.html";
        }
        else {
            alert('username already exists');
        }
    })["catch"](function (error) {
        console.error('Register failed:', error);
        alert('Register failed. Please try again later.');
    });
}
