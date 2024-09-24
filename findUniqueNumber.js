function test(array) {

    const elDiferente = array.find(num => {
            array.indexOf(num) === array.lastIndexOf(num)

        }) // con esto calculamos el diferente del array

    return elDiferente

}
console.log(test([1, 1, 1, 1, 2, 1, 1]))