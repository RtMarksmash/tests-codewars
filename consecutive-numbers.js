function agruparNumerosConsecutivos(numeros) {
    numeros.sort((a, b) => a - b);

    const grupos = [];
    let grupoActual = [numeros[0]];
    let final = [];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] === numeros[i - 1] + 1) {
            grupoActual.push(numeros[i]);
        } else {
            grupos.push(grupoActual);
            grupoActual = [numeros[i]];
        }
    }

    grupos.push(grupoActual);

    for (let i = 0; i < grupos.length; i++) {
        if (grupos[i].length >= 3) {
            final.push(`${grupos[i][0]}-${grupos[i][grupos[i].length - 1]}`);
        } else {
            final = final.concat(grupos[i]);
        }
    }

    return final.join(',');
}
const numeros = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
const resultado = agruparNumerosConsecutivos(numeros);
console.log(resultado); // [[1, 2, 3], [5, 6], [9, 10, 11]]