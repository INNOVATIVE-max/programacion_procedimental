document.getElementById("formulario-usuarios").addEventListener("submit", function(event) {
    event.preventDefault();

    let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    let nombre_US = document.getElementById("nombre_US").value.trim();
    let apellido_US = document.getElementById("apellido_US").value.trim();
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let contrasena = document.getElementById("contrasena").value;

    let genero = document.querySelector('input[name="genero"]:checked');
    let rol = document.querySelector('input[name="rol"]:checked');

    if (nombre_US === "" || apellido_US === "" || numeroDocumento === "" || fechaNacimiento === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    if (tipoDocumento === "" || tipoDocumento === "Seleccione") {
        alert("Por favor, seleccione un tipo de documento válido.");
        return;
    }

    if (!genero) {
        alert("Por favor, seleccione su género.");
        return;
    }

    if (!rol) {
        alert("Por favor, seleccione un rol para el usuario.");
        return;
    }

    if (telefono === "" || isNaN(telefono) || telefono.length < 7) {
        alert("Por favor, ingrese un número de teléfono válido.");
        return;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    alert("¡Usuario registrado con éxito!");
    document.getElementById("formulario-usuarios").reset();
});