function stringReverse(str) {

    result = [];

    const array = str.split(' ');

    /* for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 5) {
            const reverse = array[i].split('').reverse().join('');
            console.log(reverse)
            result.push(reverse)

        } else {
            result.push(array[i])
        }
    }
 */
    array.forEach(element => {
        if (element.length >= 5) {
            const reverse = element.split('').reverse().join('');
            result.push(reverse)
        } else {
            result.push(element)
        }
    })

    return result.join(' ');
}


console.log(stringReverse('Welcome'))