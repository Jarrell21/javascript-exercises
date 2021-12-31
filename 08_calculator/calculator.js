const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(num => sum+=num);
  return sum;
};

const multiply = function(array) {
  let product = 1;
	array.forEach(num => product*=num);
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let total = 1;
	for(let i = num; i > 0; i--){
    total*=i;
  }
  return total;
  

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
