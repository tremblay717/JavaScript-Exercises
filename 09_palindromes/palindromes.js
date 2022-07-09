const palindromes = function (word) {


    let pattern = /[" ".,?!]/g;
    let test = word.replace(pattern, "").toLowerCase();
    let newArray = []

    for (i = 1; i < test.length; i++) {

        if (test[i - 1] == test[test.length - i]) {
            newArray.push(1);
        } else(newArray.push(0))
    }

    if (newArray.includes(0)) {
        return false;
    } else {
        return true
    }

};

// Do not edit below this line
module.exports = palindromes;