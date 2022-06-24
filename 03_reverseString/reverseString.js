const reverseString = function (word) {

    if (word == "" || word.length == 1) {
        return word
    } else if (word.length >= 2) {
        let reverse = ""
        let i = word.length;
        while (i >= 0) {
            reverse += word.slice(i - 1, i);
            i--;
        }
        return reverse;
    }
};


// Do not edit below this line
module.exports = reverseString;
