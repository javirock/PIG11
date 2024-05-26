document.addEventListener('DOMContentLoaded', function() {
    let btnsnd = document.querySelector("#btn");

    btnsnd.addEventListener('click', function(event) {
        // Prevenir el envío del formulario y la recarga de la página
        event.preventDefault();

        // Obtener los campos del formulario
        let nombre = document.querySelector("#nick");
        let genero = document.querySelector("#genre");
        let mail = document.querySelector("#email");
        let contraseña = document.querySelector("#password");
        let confcontraseña = document.querySelector("#confpassword");
        let iread = document.querySelector ("#iread");

        // Limpiar mensajes de error anteriores
        document.querySelector("#error-nick").innerHTML = '';
        document.querySelector("#error-genero").innerHTML = '';
        document.querySelector("#error-mail").innerHTML = '';
        document.querySelector("#error-pass").innerHTML = '';
        document.querySelector("#error-confpass").innerHTML = '';

        let hasErrors = false;

        // Validar el campo de nombre
        if (nombre.value.trim() === '') {
            document.querySelector("#error-nick").innerHTML = "Debes completar el nombre de usuario";
            hasErrors = true;
        }

        // Validar el campo de género
        if (genero.value === '-') {
            document.querySelector("#error-genero").innerHTML = "Por favor seleccione su género";
            hasErrors = true;
        }

        // Validar el campo de email
        if (mail.value.trim() === '') {
            document.querySelector("#error-mail").innerHTML = "Debes completar el mail";
            hasErrors = true;
        } else {
            // Validación del formato del email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(mail.value.trim())) {
                document.querySelector("#error-mail").innerHTML = "El formato del correo electrónico no es válido";
                hasErrors = true;
            }
        }

        // Validar el campo de contraseña
        if (contraseña.value.trim() === '') {
            document.querySelector("#error-pass").innerHTML = "Debes completar la contraseña";
            hasErrors = true;
        }else if (contraseña.value.trim().length < 8) {
            document.querySelector("#error-pass").innerHTML = "La contraseña debe tener al menos 8 caracteres";
            hasErrors = true;
        }

        // Validar la confirmación de la contraseña
        if (contraseña.value.trim() !== confcontraseña.value.trim()) {
            document.querySelector("#error-confpass").innerHTML = "Las contraseñas no coinciden";
            hasErrors = true;
        }

        if (iread.checked == false){
            document.querySelector("#error-iread").innerHTML = "Debes aceptar los terminos y condiciones";
            hasErrors = true;
        }


        // Si no hay errores, se confirma el envío del formulario
        if (!hasErrors) {
            Swal.fire({
                title: "Perfecto!",
                text: "Gracias por registrarte",
                footer: '<a href="/templates/login.html">Iniciar sesión</a>',
                icon: "success"
              });
        }
    });
});




// Funcion para iluminar label del register y login
function iluminarlabel(input, add) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
        if (add == true) {
            label.classList.add('iluminar');
        } else {
            label.classList.remove('iluminar');
        }
    }
}

// Seleccionar todos los inputs del formulario
const inputs = document.querySelectorAll('input:not([type="checkbox"]), select');

// Añadir listeners para focus y blur a cada input
inputs.forEach(input => {
    input.addEventListener('focus', () => iluminarlabel(input, true));
    input.addEventListener('blur', () => iluminarlabel(input, false));
});


