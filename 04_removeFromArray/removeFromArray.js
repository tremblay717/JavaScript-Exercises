const removeFromArray = function (array, ...args) {

    let testArray = Array.from(args);

    for (i = 0; i <= testArray.length; i++) {
        let value = testArray.slice(i, i + 1)
        array = array.filter(result => result !== value[0])
    }
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
