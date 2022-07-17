const fibonacci = function(num) {
    if (num < 0) {
      return "OOPS";
    } else {
      let array = [0, 1];
      let i = 1;
      while (i < num) {
        array.push(array[i] + array[i - 1]);
        i++;
      }
      return array[num];
    }
  };

  // Do not edit below this line
module.exports = fibonacci;