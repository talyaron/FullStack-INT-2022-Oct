
function login(event) {

    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');


    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "./main.html";
            } else {
                alert('Incorrect username or password. Please try again.');
            }
        })
        .catch(error => {
            console.error('Login failed:', error);
            alert('Login failed. Please try again later.');
        });
}