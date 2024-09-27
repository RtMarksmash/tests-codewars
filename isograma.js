function test(str) {
    return !/(.).*\1/.test(str)
};

console.log(test('facebook'));
console.log(test('Dermatoglyphics'));