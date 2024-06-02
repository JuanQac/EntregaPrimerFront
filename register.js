document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const nacimiento = document.getElementById('nacimientoInput').value;
    const pais = document.getElementById('paisSelect').value;

    // Guardar la información del usuario en localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('nacimiento', nacimiento);
    localStorage.setItem('pais', pais);

    // Redirigir a la página de login
    window.location.href = 'login.html';
});