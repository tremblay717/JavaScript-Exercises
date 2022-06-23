const repeatString = function(string, num) {

    let value = "";
    if (num < 0) {
      return "ERROR";
    }
    else {
      let i = 1;
      while (i <= num) {
  
        value += string;
        i++;
      }
      return value;
    }
  };

// Do not edit below this line
module.exports = repeatString;
