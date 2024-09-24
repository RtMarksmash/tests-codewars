/* function vowels(str) {
    str = str.toLowerCase();

    let vowel = /[aeiou]/

    let count = str.split(vowel).length - 1;

    return count

} */


//onsole.log(vowels('mire si funciono de esa manera'));


function newVowel(str) {
    const vowel = str.match(/[aeiou]/g);

    return vowel ? vowel.length : 0;

}

console.log(newVowel('abracadabra'))