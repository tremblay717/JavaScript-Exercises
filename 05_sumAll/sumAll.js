const sumAll = function (p1, p2) {

    if
        (((p1 < 0 || p2 < 0)) || (typeof (p1) !== 'number' || typeof (p2) !== 'number')) {
        return 'ERROR'
    } else {
        let list = [p1, p2];
        let sort = list.sort((a, b) => a - b);

        const valuesMissing = sort[1] - sort[0];

        let newList = [sort[0]];

        let i = 0;

        while (i < valuesMissing) {

            newList.push(newList.length + 1)
            i++
        }
        let count = 0;

        for (let j = 0; j < newList.length; j++) {
            let number = newList.slice(j, j + 1);
            count += number[0];
        }

        return count
    }
}

// Do not edit below this line
module.exports = sumAll;
