//-------------------------------//
// Destructuring
//-------------------------------//
var expense = {
  type: 'Business',
  amount: '$45 USD',
}
// ES5
var type = expense.type;
var amount = expense.amount;
// ES6
const { type } = expense;
const { amount } = expense;
// Even better
const { type, amount, asdf } = expense;

type;
amount;
typeof asdf; // returns undefined
// the name of the variable name must be identical to the property name you are trying to copy


// Destructuring Argument Objects
// use destructuring to pull properties of objects that are passed to functions
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};
// ES5
function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
// ES6
function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}
// ES6 with two arguments
function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}
fileSummary(savedFile);

fileSummary(savedFile, { color: 'red' });


// Destructuring Arrays
const companies = ['Google', 'Facebook', 'Uber', 'Airbnb' ];

// ES5
var  firstCompany = companies[0];
// ES6
// destructure an element use square braces
const [ firstCompany, name2, name3, name4 ] = companies;
firstCompany; // returns Google
name2;
name3;
typeof name4; // returns undefined

// destructure property with curly braces
const { length } = companies;
length; // returns 3

// ES5 -> ugly
var name = companies[0]

// destructuring + spread operator ES6
const [ name, name2, ...rest ] =  companies
name; // returns 'Google'
rest; // returns ["Uber", "Airbnb"]


// Destructuring Arrays and Objects at the same time
const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park'},
  { name: 'Uber', location: 'San Francisco'}
];

// ES5
var location = companies[0].location;
location; // Mountain View

// ES6
const [{ location }] = companies;
location;

// Opposite example of destructuring objects and arrays
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [location] } = Google;
location; // returns MountainView


// when to use destructuring
// we have a function that takes too many arguments that it is hard to remember the order when calling it
function signup(username, password, email, dateOfBirth, city) {
  // create new user
}

signup('myname', 'mypassword', 'email@example.com', '1/1/1990', 'New York');

// solution
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
}

function signup({ username, password, email, dateOfBirth, city }) {
  // create new user
}

// practical use case of destructuring an array
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];
// challenge -> convert points array(above) to points object(below)
[
  { x: 4, y: 5},
  { x: 10, y: 1},
  { x: 0, y: 40},
]
// solution with ES6 instead of a forLoop
points.map(([ x, y ]) => {
  // ES5
  // const x = pair[0];
  // const y = pair[1];
  // ES6
  //const [ x, y ] = pair;
  // return {x: x, y: y};
  return {x, y};
});

// exercise
// The 'classes' variable holds an array of arrays, where each array
// represents a single class that a student is enrolled in.  Convert this
// array of arrays into an array of objects, where each object has the keys
// 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.
// Use array destructuring and the map helper.
// The resulting data structure should look something like the following:
// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
    return { subject, time, teacher };
});

classesAsObject; // returns
                // [{"subject":"Chemistry","time":"9AM","teacher":"Mr. Darnick"},{"subject":"Physics","time":"10:15AM","teacher":"Mrs. Lithun"},{"subject":"Math","time":"11:30AM","teacher":"Mrs. Vitalis"}]


// last example

// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.
// Do not use any array helpers!
// Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)
// Input:
// double([1,2,3])
const numbers = [1, 2, 3];

function double([ first, ...rest ]) {
    return rest.length > 0 ? [ first*2, ...double(rest)] : [ first*2 ];
}
double([1,2,3]); // returns [2,4,6]
