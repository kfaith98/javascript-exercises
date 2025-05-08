const convertToCelsius = function(temp) {
  const x = temp;
  let result = ((x - 32) * 5/9);

  let roundedTemp = Math.round(result * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  const x = temp;
  let result = (x * 9/5) + 32;

  let roundedTemp = Math.round(result * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
