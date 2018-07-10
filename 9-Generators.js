//-------------------------------//
// Generators
//-------------------------------//

// For of loop refresher
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

const numbers = [1,2,3,4];
let total = 0;
for (let number of numbers) {
  total += number;
}

// Generators
// generator: function that can be entered and exited multiple times
// can run some code, return a value and go back into the function at the same place we left it
function* numbers() {}
//or
function *numbers() {
  yield;
}

console.log(numbers());

const gen = numbers();

gen.next(); // returns {"done":false}
gen.next(); // returns {"done":true}

// example
function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into store with cash
  const stuffFromStore = yield 'cash';

  // make another stop before you go back home walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes]; // final vale is groceries
}

// stuff in store

const gen = shopping();// when we call shopping(); nothing really happens
// first we leave house with gen.next(); thats when we actually execute code
gen.next(); // leaving our house -> returns {"value":"cash","done":false}
// walked into the store
// walking down isles
// purchase stuff
// transition back to sidewalk with gen.next('groceries')
// groceries is assigned to stuffFromStore
gen.next('groceries'); // leaving store with groceries -> returns {"value":"groceries","done":true}
gen.next('clean clothes'); // returns {"value":["groceries","clean clothes"],"done":true}
// we execute code by calling .next

// yield is usually used when some kind of execution context
// surrenders control flow to a different execution context.

//another example

function* colors() {
	yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next(); // returns {"value":"red","done":false}
gen.next(); // returns {"value":"blue","done":false}
gen.next(); // returns {"value":"green","done":false}
gen.next(); // returns {"done":true}

// generators work perfectly with for of loops
// no need for next
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

myColors; // returns [red","blue","green"]
// when we use generators and for of loops in tandem
// we can build up objects that will iterate through any
// type of data structure

/////////////////////////////////////////////////////////
// Practical Use for ES6 generators
// i want to iterate over very particular properties
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// use generators to iterate through this object
// but only through employees skip size and department

function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names; // returns ["Jill","Alex","Dave"]


// Combine multiple generators together (delegation of generators)
// we have a subteam of testing team and we also want to iterate through them
// Delegate from engineering team iterator to testing team iterator
function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  // generator delegation
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names; // returns ["Jill","Alex","Dave","Amanda","Bill"]

/////////////////////////////////////////////////////////
// the sybol.iterator teaches objects how to respond to the for of loop

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  // inside here we put our generator function
  // its job is to teach a for of loop how to iterate over this object
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
    yield 5;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    // when we delegate we tell it to go find another object and iterate over it
    // looks if [Symbol.iterator] is defined in testingTeam
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}

names; // returns ["Jill","Alex","Dave","Amanda","Bill", 5]

/////////////////////////////////////////////////////////
// Generators with recursion
// Real world Use
// tree data structure
// example reddit is a collection of subnodes
// create a tree and iterate through it

class Comment {
  constructor(content, children) {
    this.content =  content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    // map and for each dont work with generators
    // only for of loop works
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

tree; // returns
			// {"content":"Great post!","children":[
							// {"content":"good comment","children":[]},
							// {"content":"bad comment","children":[]},
							// {"content":"meh","children":[]}]}

// how do we iterate through this data structure?
// how to do it with any depth from top node to an arbitrary depth

const values = [];
for (let value of tree) {
  values.push(value);
}

values; // returns ["Great post!","good comment","bad comment","meh"]
