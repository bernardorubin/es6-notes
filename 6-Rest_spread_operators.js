//-------------------------------//
// Rest and spread operators
//-------------------------------//
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1,2,3,4,5]);
// what if i want to pass multiple arguments instead of an array
// rest operator
// used to gather together variables into an array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
addNumbers(1,2,3,4,5,6,7,8,9,10)

// spread operator
// flattens or spreads the variables out
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fall red', 'fall orange']
// i want to join all colors into an array
// ES5
defaultColors.concat(userFavoriteColors);
// ES6
[ 'black', 'blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];

// example that uses both spread and rest
// validate we have milk in grocery list
function validateShoppingList(...items) {
  // if milk is not on my list add it
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  // else return items list
  return items;
}


validateShoppingList('apple', 'cookies'); // returns
["milk","apple","cookies"]

// Real use
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
};
// i want to rename my library method from calculateProduct to multiply
const MathLibrary = {
  // we use rest to pass them down
  calculateProduct(...rest) {
    console.log('please use multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.calculateProduct(5, 2);

// last example

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
// refactor with spread an rest
function unshift(array, ...items) {
  return [...items, ...array];
}
