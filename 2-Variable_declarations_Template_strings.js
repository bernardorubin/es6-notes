//-------------------------------//
// Variable declarations
//-------------------------------//
// ES5
var name = 'Bern';
var title = 'Software Engineer'
var hourlyWage = 40;

//ES6
const name = 'Bern';
let title = 'Software Engineer'
let hourlyWage = 40;

title = 'Senior Software Engineer'
hourlyWage = 50;

//-------------------------------//
// Template Strings
//-------------------------------//
function getMessage(){
  const year = new Date().getFullYear();
  // ES5
  return "The year is " + year
  // ES6
  return `The year is ${year}`
}

getMessage();
