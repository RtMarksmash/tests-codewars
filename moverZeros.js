function moveZeros(array) {
    let nonZeroCount = 0; // Contador de elementos no cero

    // Primera pasada: mover todos los no ceros al frente del array
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[nonZeroCount] = array[i]; // Coloca los no ceros en las primeras posiciones
            nonZeroCount++;
        }
    }

    // Segunda pasada: rellenar los últimos elementos con ceros
    for (let i = nonZeroCount; i < array.length; i++) {
        array[i] = 0; // Rellena con ceros
    }

    return array;
}