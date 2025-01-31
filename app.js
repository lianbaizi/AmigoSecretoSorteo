/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
programación. Aquí deberás desarrollar la lógica para resolver el problema.
*/

// Creamos una lista para almacenar los nombres de las personas ingresadas
let lista = [];

// Obtiene el nombre ingresado y lo limpia de espacios innecesarios
function obtenerNombre() {
    return document.querySelector('.input-name').value.trim();//elimina los espacios en blanco de un string
}

// Verifica si el nombre ingresado es válido
function esNombreValido(nombre) {
    return nombre !== "";
}

// Verifica si el nombre ya está en la lista
function esNombreDuplicado(nombre) {
    return lista.includes(nombre);
}

// Agrega un nombre a la lista
function agregarNombreALista(nombre) {
    lista.push(nombre);
}

// Limpia la caja de entrada después de agregar un nombre
function limpiarCajaEntrada() {
    const inputAmigo = document.querySelector('.input-name');
    inputAmigo.value = "";
}

// Actualiza la lista de nombres en el DOM
function actualizarListaEnDOM() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    lista.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función principal para agregar un amigo
function agregarAmigo() {
    let nombre = obtenerNombre();

    if (!esNombreValido(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (esNombreDuplicado(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    agregarNombreALista(nombre);
    limpiarCajaEntrada();
    actualizarListaEnDOM();
}

// Genera un índice aleatorio para seleccionar un nombre de la lista
function generarIndiceAleatorio() {
    return Math.floor(Math.random() * lista.length);
}

// Muestra el nombre sorteado en el DOM
function mostrarNombreSorteado(nombre) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li style="color: purple; font-weight: bold; font-size: 1.5em;">${nombre}</li>`;
}

// Limpia la lista después del sorteo
function limpiarLista() {
    lista = [];
    actualizarListaEnDOM();
}

// Función principal para sortear un amigo
function sortearAmigo() {
    if (lista.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = generarIndiceAleatorio();
    const nombreSorteado = lista[indiceAleatorio];

    mostrarNombreSorteado(nombreSorteado);
    limpiarLista();
}
