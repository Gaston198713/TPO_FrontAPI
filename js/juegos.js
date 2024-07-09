function completarTexto() {
    console.log("Función completarTexto() ejecutada");

    //Obtenemos los datos de los input y los asignamos a las variables
    let nombre = document.getElementById('firstname').value;
    let genero = document.getElementById('genero').value;
    let banner = document.getElementById('banner').value;

    // Llamas a la función de validación
    if (validarDatos(nombre, genero, banner )) {
        // Construyes el mensaje
        let mensaje = `Has creado el juego: ${nombre}, de genero: ${genero}`;

        // Asignas el mensaje al párrafo
        document.getElementById('mensaje').innerText = mensaje;
    }
}

function validarDatos(nombre, genero, banner) {

    // Verificar si los campos están vacíos
    if (nombre === '' || genero === '' || banner === '') {
        // Mostrar mensaje de error
        alert('Por favor completa todos los campos del formulario.');
        return false; // Los datos no son válidos
    }

    // Si todos los campos están completos, retornar true
    return true;
}