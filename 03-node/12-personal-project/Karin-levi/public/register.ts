function register(event) {

    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');


    fetch('/register', {
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
                alert('username already exists');
            }
        })
        .catch(error => {
            console.error('Register failed:', error);
            alert('Register failed. Please try again later.');
        });
}