function login() {
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status == 200) {
            return response.json().then(data => {
                console.log(data);
                window.location.href = "prueba.html";
            });
        } else {
            return response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });
        }
    })
    .catch((error) => {
        document.getElementById("message").innerHTML = "Ocurrio un error";
    });
}