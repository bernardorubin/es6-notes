//-------------------------------//
// Classes
//-------------------------------//
// Inheritance system -> OOP
// JS only has prototypal inheritance
// ES6 has a solution to prototypal inheritance
// classes
// under the hood we still use prorotypal inheritance

function Car(options) {
  this.title = options.title;
}

// add a method to the car object

// whenever we add method to car class or class prototype
// we add it to the prototype object of the constructor(Car)
// ES5
Car.prototype.drive =  function() {
  return 'vroom';
}

const car =  new Car({ title: 'Focus' });
car.drive();
car;

// Toyota inherits from car
// ES5
function Toyota(options) {
  Car.call(this, options); // initialize car object
  this.color =  options.color;
}
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
toyota;
toyota.drive();
toyota.honk();

// ES6 classes to the rescue!!

class Car {
  // initializer method
  constructor({ title }) {
    this.title = title;
  }
  // no comma needed
  // use improved object literal syntax to define method
  drive() {
    return 'vroom'
  }
}

// to get all initialization and setup from Cars construction method use super();
class Toyota extends Car {
  constructor(options) {
    // call parent method on parent class -> super()
    super(options); // calls Car constructor method -> Car.constructor()
    this.color = options.color;
  }
  honk() {
    // if car had a honk method that i want to call both instances of the honk method i just use super();
    return 'beep'
  }
}

const car = new Car({ title: 'Toyota'});
car; // returns {"title":"Toyota"}
car.drive(); // returns vroom

const toyota = new Toyota({ title: 'toyota', color: 'red' });
toyota.honk(); // returns beep
toyota; // returns {"title":"toyota","color":"red"}
toyota.drive(); // returns vroom

// When to use classes
// before in react
React.createClass({
  doSomething() {
  },
  doSomethingElse() {
  }
});

//now there is a class based approach
class MyComponent extends Component {
  doSomething() {
  }
  doSomethingElse() {
  }
}


// exercise ->  initialize monster health to 100, assign the name to the monster
class Monster {
    constructor({ name }) {
        this.name = name;
        this.health = 100;
    }
}

// create a subclass of monster -> Should have a bite method, the only
// argument passed should be another instance of a snake, that instance should have their health deducted by 10

class Snake extends Monster {
    bite(snake) {
        return snake.health -= 10
    }
}
