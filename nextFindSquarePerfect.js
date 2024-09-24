function nextFindSquare(square) {

    const squareResult = Math.sqrt(square);

    if (Number.isInteger(squareResult)) {
        const nextSqare = squareResult + 1
        const result = Math.pow(nextSqare, 2)
        return result

    } else {
        return -1
    }

}

console.log(nextFindSquare(625))