# Juego de Sorteo de Amigos

Este es un juego sencillo que permite agregar nombres a una lista y luego sortear aleatoriamente uno de esos nombres. Después de realizar el sorteo, la lista se borra y solo queda visible el nombre sorteado.

## Funcionalidades

- Agregar un amigo a la lista
- Visualizar la lista de amigos agregados
- Sortear un amigo aleatoriamente
- Mostrar el nombre sorteado y borrar la lista

## Estructura del Código

### Variables Globales

- `lista`: Almacena los nombres de los amigos ingresados.

### Funciones

#### `obtenerNombre()`

Obtiene el nombre ingresado en el campo de texto y elimina los espacios en blanco al principio y al final.

#### `esNombreValido(nombre)`

Verifica si el nombre ingresado es válido (no vacío).

#### `esNombreDuplicado(nombre)`

Verifica si el nombre ya está en la lista para evitar duplicados.

#### `agregarNombreALista(nombre)`

Agrega el nombre a la lista.

#### `limpiarCajaEntrada()`

Limpia el campo de entrada de texto después de agregar un nombre.

#### `actualizarListaEnDOM()`

Actualiza la visualización de la lista de amigos en el DOM (Document Object Model).

#### `agregarAmigo()`

Función principal para agregar un amigo a la lista. Realiza las siguientes acciones:
1. Obtiene el nombre ingresado.
2. Verifica si el nombre es válido.
3. Verifica si el nombre ya está en la lista.
4. Agrega el nombre a la lista.
5. Limpia el campo de entrada.
6. Actualiza la lista en el DOM.

#### `generarIndiceAleatorio()`

Genera un índice aleatorio basado en la longitud de la lista.

#### `mostrarNombreSorteado(nombre)`

Muestra el nombre sorteado en el DOM con estilo personalizado.

#### `limpiarLista()`

Limpia la lista después del sorteo y actualiza el DOM.

#### `sortearAmigo()`

Función principal para sortear un amigo. Realiza las siguientes acciones:
1. Verifica si hay al menos un nombre en la lista.
2. Genera un índice aleatorio.
3. Obtiene el nombre sorteado.
4. Muestra el nombre sorteado en el DOM.
5. Limpia la lista.

## Uso

1. Ingresar un nombre en el campo de texto y hacer clic en "Agregar Amigo" para añadirlo a la lista.
2. Repetir el paso anterior para agregar más nombres.
3. Hacer clic en "Sortear Amigo" para seleccionar aleatoriamente un nombre de la lista.
4. El nombre sorteado se mostrará en color morado y la lista se limpiará automáticamente.


