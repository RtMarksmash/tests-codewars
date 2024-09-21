function alphabetPosition(text) {
    let outPut = [];

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (/[a-z]/.test(char)) {
            outPut.push(char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
        }
    }

    let result = outPut.join(' ')

    return result;
};

console.log(alphabetPosition('The sunset sets at twelve o clock.'))