const ftoc = function (fTemp) {

  const cTemp = ((fTemp - 32) * (5 / 9));

  return Math.round(cTemp * 10) / 10

};

const ctof = function (cTemp) {

  const fTemp = (cTemp * 1.8) + 32;

  return Math.round(fTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
