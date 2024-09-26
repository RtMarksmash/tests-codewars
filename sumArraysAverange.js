function averange(array) {

    let totalPromedio = 0;

    for (let i = 0; i < array.length; i++) {
        let suma = array[i].reduce((a, b) => a + b);
        let long = array[i].length;
        let promedio = suma / long;
        totalPromedio = totalPromedio + promedio; // igual a decir totalPromedio =+ promedio
    }

    return Math.floor(totalPromedio)

}

console.log(averange([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77]
]));