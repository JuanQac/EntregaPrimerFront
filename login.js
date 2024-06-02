document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Obtener la información del usuario desde localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Verificar las credenciales
    if (email === storedEmail && password === storedPassword) {
        // Redirigir a la página principal
        window.location.href = 'index.html';
    } else {
        alert('Email o contraseña incorrectos');
    }
});
