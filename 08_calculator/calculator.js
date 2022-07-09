const add = function (start_num, number) {
  return start_num + number;
};

const subtract = function (start_num, number) {
  return start_num - number;
};

const sum = function (array) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array.slice(i, i + 1);
    num += value[0]
  }
  return num;
}

const multiply = function (array) {
  let num = array.slice(0, 1)[0];

  let new_array = [array.slice(0, 1)[0]]

  for (let i = 1; i < array.length; i++) {

    let value = new_array[i - 1] * array[i];
    new_array.push(value);
  }
  let returnValue = new_array.slice(new_array.length - 1)[0];
  return returnValue
};

const power = function (num, power) {

  return num ** power;
};

const factorial = function (num) {

  if (num == 0) {
    return 1;

  } else {

    let array = [num];
    let factArray = array.slice(0, 1);
    
    for (i = 0; i < num; i++) {

      let value = array.slice(i, i + 1)[0] - 1
      array.push(value);
    }
    for (j = 1; j < array.length; j++) {
      let fact = factArray[j - 1] * array[j];
      factArray.push(fact);
    }
    return factArray[factArray.length - 2];
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};