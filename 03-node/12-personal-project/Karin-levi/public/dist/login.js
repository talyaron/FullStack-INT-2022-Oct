function login(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var username = formData.get('username');
    var password = formData.get('password');
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data.success) {
            alert('Login successful!');
        }
        else {
            alert('Incorrect username or password. Please try again.');
        }
    })["catch"](function (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please try again later.');
    });
}
