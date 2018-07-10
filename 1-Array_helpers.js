// ------ARRAY HELPERS-------------------------//
//-------------------------------//
// forEach -> Swiss army knife of array helpers
//-------------------------------//
// Use when you want to call a method multiple times,
// passing a different argument each time
var colors = [ 'red', 'blue', 'green' ];
//ES5
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
};
//ES6
colors.forEach(function(color) {
  console.log(color);
});
// Problem: Sum all values in an array
// Step 1: Create array of numbers
var numbers = [1,2,3,4,5];
// Step 2: Create a variable to hold the sum
var sum = 0;
// Step 3: Loop over the array incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
});
// Step 4: Print the sum variable
sum;
// Same as above but taking out the inner function
function adder(number) {
  sum += number;
}
numbers.forEach(adder);
// Example real world use:
// Delete all selected from a email folder
let emails = ['lose weigth', 'fantastic scam']
const deleteEmail = () => {return null;}
emails.forEach(function(email) {
  deleteEmail(email);
});
// Last example
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach(function(image) {
    areas.push(image.height * image.width);
});
//---------------------------------------------//
// map -> Most widely used
//-------------------------------//
// Use when you want to modify records in some list of data
// Whatever the function returns is placed into a new array
// Write a loop that iterates over a list of numbers
// Doubles the value and pushes it to an array
var numbers = [1,2,3];
var doubledNumbers = [];
// In large complex applications you want to avoid mutating
// or changing data wherever possible
//ES5
for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
doubledNumbers;
//ES6
var doubled = numbers.map(function(number) {
  return number * 2;
});
doubled;
// Other example
// I want to know the prices of each car
var cars = [
  { model: 'Buick', price: 'cheap'},
  { model: 'Camaro', price: 'expensive'}
 ];
var prices = cars.map(function(car) {
  return car.price;
});
prices;
// Other example
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var speeds = trips.map(function(trip) {
    return trip.distance/trip.time;
})
// Implement pluck
function pluck(array, property) {
    return array.map(function(element) {
        return element[property];
    })
}
pluck(cars, 'model');
//---------------------------------------------//
// filter ->
//-------------------------------//
// evaluates to true or false and filters accordingly
// Used with relational data
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];
//ES5
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
  if(products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
filteredProducts;
//ES6
products.filter(function(product) {
  return product.type === 'fruit';
});
// Advanced filter
products.filter(function(product) {
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});
// Advanced examples for a belongs to relation
// For a particular post return comments associated with that post
// Given a list fo comments and a particular post
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}
commentsForPost(post, comments);
//---------------------------------------------//
// find
//-------------------------------//
// look for the first element in an array that returns true
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
]
// ES5
var user;
for (var i = 0;  i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break
  }
}
user;
// ES6
users.find(function(user) {
  return user.name === 'Alex';
}); //returns {"name":"Alex"}
// Other example
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'), //car object with a property this.model = Buick
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});
// Another example with posts
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' },
];
// I have a comment with a postId of 1
var comment = { postId: 1, content: 'Great Post' };
// Takes a list of posts, a single comment, and with the comment's
// postId it should find the post with that particular id
function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
};

postForComment(posts, comment)

//Custom findWhere helper
var ladders = [
  { id: 1, height: 20 },
  {id: 3, height: 25 }
]
function findWhere(array, criteria) {
var property = Object.keys(criteria)[0];
  return array.find(function(item){
      return item[property] === criteria[property]
  });

}

findWhere(ladders, { height: 20});
findWhere(ladders, { id: 3});
//---------------------------------------------//
// every
//-------------------------------//
// every and some
// condense array into a single value like a boolean or number or string
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
]
// do i have any computers that can run the program? I dont care which one
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;
//ES5
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if(computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;
// every
// returns true if all computers are greater than 16
// returns boolean and joins the with &&
// ES6
computers.every((computer) => {
  return computer.ram > 16
});

//-------------------------------//
// some
//-------------------------------//
// Do any records on the array satisfy this criteria?
// returns boolean and joins the with ||
computers.some((computer) => {
  return computer.ram > 16;
});

// another example for every helper
var names = [
  'Alexandria',
  'Matthew',
  'Joe'
]
// Are all names larger than 4 characters?
names.every((name) => {
  return name.length > 4;
});
// Does at least one of these names have a length greater than 9
names.some((name) => {
  return name.length > 8
})
// Real world use
// building login you want to make sure they typed something in
// this is the validation
// Field is a text input
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");
//ES5
username.validate() && password.validate() && birthdate.validate();
// ES6
var fields = [username, password, birthdate];
var formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  //allow user to Submit
} else {
  // show an error message
}

// other example: has everyone submitted the form?
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted;
})

// other example: assign true to inProgress if any request has a status of 'pending'
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});
//---------------------------------------------//
// reduce
//-------------------------------//
// most flexible helper -> could reimplement every other helper covered using reduce
// also condenses an array into a single value like 'every' and 'some'
// example with for loop
var numbers = [10, 20, 30];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// example with reduce
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0); // <- initial value
// another example
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];
// try and create this array ['red', 'yellow', 'blue']
// could do it with map but lets use reduce
primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);
// real world use
// you can use reduce to sum numbers since you have an accumulator
// given a string with parenthesis say if it is balanced
// "()()()()" -> Balanced
// "(((())))" -> Balanced
// ")()(" -> Unbalanced because the positions are incorrect
// ")))))" -> Unbalanced
function balancedParens(string) {
  // turn string to array to use reduce
  // add exclamation as a flip of boolean -> positive or negative is truthy -> 0 is false
  return !string.split("").reduce(function(previous, char){
    if(previous < 0) {return previous}
    if(char === "("){ return ++previous; }
    if(char === ")") { return --previous; };
    return previous;
  }, 0);
}

balancedParens("(((())(())))")

//example sum all distances with reduce
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((accumulator, trip) => {return accumulator + trip.distance}, 0);

// example -> Use reduce to create an object that counts the number of sitting and standing desks

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce((accumulator, { type }) => {
   accumulator[type]++;
	 return accumulator
}, { sitting: 0, standing: 0 });

deskTypes

// example -> Create a unique function that removes duplicate values from an array
function unique(array) {
  return array.reduce((accumulator, item) => {
      if(!accumulator.find((old_item) =>
            {return old_item === item;})
            ) {
            accumulator.push(item);
        }
        return accumulator;
  }, []);
}

var numbers = [1, 2, 3, 3];
unique(numbers);
