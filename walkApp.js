function walkApp(array) {
    if (array.length !== 10) {
        return false
    };

    console.log(array.length)

    let horizontal = 0;
    let vertical = 0;

    for (let adress of array) {
        if (adress === 'n') { vertical += 1 }
        if (adress === 's') { vertical -= 1 }
        if (adress === 'e') { horizontal += 1 }
        if (adress === 'w') { horizontal -= 1 }
    };

    console.log(horizontal);
    console.log(vertical);

    return vertical === 0 && horizontal === 0;

}

console.log(walkApp(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))


//['n','s','n','s','n','s','n','s','n','s']