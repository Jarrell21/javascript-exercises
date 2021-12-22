const ftoc = function(farenheit) {
  const celsius = (farenheit -32)*(5/9);
  const roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const ctof = function(celsius) {
  const farenheit = celsius*(9/5)+32;
  const roundedFarenheit = Math.round(farenheit * 10) / 10;
  return roundedFarenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
