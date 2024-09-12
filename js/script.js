document.getElementById('generate').addEventListener('click', function () {
    // Caracteres disponibles para la contraseña
    const upperCase = 'BCDFGHJKLMNPQRSTVWXYZ'; // Letras mayúsculas
    const lowerCase = 'bcdfghjklmnpqrstvwxyz'; // Letras minúsculas
    const numbers = '0123456789';              // Números
    const specialChars = ' !$#@%&*()_+[]{}|:,.<>?'; // Caracteres especiales

    const longitud = 8; // Longitud de la contraseña
    const allChars = upperCase + lowerCase + numbers + specialChars; // Todos los caracteres posibles

    let password = ''; // Inicializamos la variable para la contraseña
    let passlist = document.getElementById('password-list'); // Lista donde se mostrarán las contraseñas generadas

    // Bucle para generar la contraseña de 8 caracteres
    for (let i = password.length; i < longitud; i++) {
        const random = Math.floor(Math.random() * allChars.length); // Selecciona un índice aleatorio
        password += allChars[random]; // Añade el carácter a la contraseña
    }

    // Si la contraseña no está vacía, se añade a la lista
    if (password !== '') {
        let li = document.createElement('li'); // Crea un nuevo elemento de lista
        passlist.appendChild(li); // Lo añade a la lista
        li.innerHTML = password; // Muestra la contraseña generada
    }
});
