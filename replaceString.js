function replace(str) {
    let result = [];
    const strLowerCase = str.toLowerCase();
    const array = strLowerCase.split('');

    for (let i = 0; i < array.length; i++) {

        if (strLowerCase.indexOf(array[i]) !== strLowerCase.lastIndexOf(array[i])) {
            array[i] = ')';
            result.push(array[i]);
        } else {
            array[i] = '(';
            result.push(array[i]);
        }
    }

    return result.join('')
}

console.log(replace('Success'))