//-------------------------------//
// Default function arguments
//-------------------------------//
// ES5 setting default value
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }
  return method
}
// ES6
function makeAjaxRequest(url, method = 'GET') {
  return method
}
makeAjaxRequest('google.com'); // returns GET
makeAjaxRequest('google.com', 'POST'); // returns POST
makeAjaxRequest('google.com', null); // null wont get reassigned as passing undefined in the first case
// by convention in javascript we use null when we want to say this si null -> nothing exists here and I as a developer want it to be that way
// that's when we use null as opposed to undefined
makeAjaxRequest('google.com', undefined); // returns GET -> gets reassinged to GET

//Use cases of default arguments
function User(id) {
  this.id = id;
}

function generateId() {
	return Math.random() * 999999;
}

function createAdminUser(user) {
  user.admin = true;
  return user;
}
// to avoid this:
createAdminUser(new User(generateId()));
// use default arguments
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

createAdminUser();
// you can also create the user object and use it as an argument to create an admin
const user = new User(generateId());
createAdminUser(user);

// other example
// ES5
function sum(a = 0, b = 0) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}

// ES6
function sum(a = 0, b = 0) {
  return a + b;
}

// other example
// ES5
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}

// ES6
function addOffset(style = { offset: '10px'}) {
  return style;
}
