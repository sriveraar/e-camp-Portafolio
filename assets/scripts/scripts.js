// Agrandar barra de navegador
document.querySelectorAll('.menu__item').forEach(function (a) {
    a.addEventListener('mouseover', function () {
        this.classList.add('scale2');
    });
    a.addEventListener('mouseout', function () {
        this.classList.remove('scale2');
    });
});


// Agrandar Iconos de contacto
document.querySelectorAll('.icono').forEach(function (icono) {
    icono.addEventListener('mouseover', function () {
        this.classList.add('scale2');
    });
    icono.addEventListener('mouseout', function () {
        this.classList.remove('scale2');
    });
});


// Imagen con el efecto
const imagenes = document.querySelectorAll('.animacion');


// Recorrer todas las imágenes seleccionadas
imagenes.forEach(function(imagen) {
    // Añadir evento al pasar el cursor sobre cada imagen
    imagen.addEventListener('mouseover', function() {
        // Al pasar el cursor: giro horizontal y escalado
        imagen.style.transform = 'scaleX(-1) scale(1.5)';
    });

    // Añadir evento al quitar el cursor de cada imagen
    imagen.addEventListener('mouseout', function() {
        // Al quitar el cursor: volver a la forma y tamaño originales
        imagen.style.transform = 'scaleX(1) scale(1)';
    });
});


// Envío de formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Evitar el envío del formulario antes de la validación
    event.preventDefault();

    // Obtener los valores de los campos
    let nombre = document.getElementById("floatingNombre").value;
    let apellido = document.getElementById("floatingApellido").value;
    let correo = document.getElementById("floatingCorreo").value;
    let mensaje = document.getElementById("floatingMensaje").value;
    let errorMessage = document.getElementById("error");

    // Expresión regular para validar el formato del correo
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Limpiar mensajes de error previos
    errorMessage.innerHTML = "";

    // Validar que los campos no estén vacíos
    if (nombre === "") {
        errorMessage.innerHTML = "Por favor, ingresa tu nombre.";
        return;
    }
    if (apellido === "") {
        errorMessage.innerHTML = "Por favor, ingresa tu apellido.";
        return;
    }
    if (correo === "") {
        errorMessage.innerHTML = "Por favor, ingresa tu correo electrónico.";
        return;
    } else if (!emailPattern.test(correo)) {
        errorMessage.innerHTML = "Por favor, ingresa un correo electrónico válido.";
        return;
    }
    if (mensaje === "") {
        errorMessage.innerHTML = "Por favor, escribe un mensaje.";
        return;
    }

    // Si todo está bien, envía el formulario
    errorMessage.innerHTML = "Formulario enviado correctamente.";

});