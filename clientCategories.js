function clientCategory(data) {

    let clasificacion = [];

    for (i = 0; i < data.length; i++) {
        let edad = data[i][0];
        let handicap = data[i][1];

        if (edad >= 55 && handicap > 7) {
            clasificacion.push(['senior'])
        } else {
            clasificacion.push(['open'])
        }
    }

    return clasificacion

}

console.log(clientCategory([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23]
]))