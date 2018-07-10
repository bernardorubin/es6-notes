//-------------------------------//
// Arrow functions
//-------------------------------//
// ES5
const add = function(a, b) {
  return a + b;
}

add(1,2);
//ES6
const adder = (a, b) => {
  return a + b;
}

adder(1,2);

// this has a single expression we can remove return word and curly braces
// implicit return
const addero = (a, b) => a + b;
const newSum = addero(1,2);
newSum;

// this wont return anything
const wontWork = (a, b) => {
  a + b;
}

//Advanced example
const double = (number) => 2* number;

// If we have a single argument we can omit the parenthesis around it
const double2 = number => 2 * number;

double2(8);
// other example
const numbers = [1,2,3]
numbers.map(number => 2 * number);

// When to use arrow functions -->
// ES5
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
	teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary(); // cannot read property 'teamName' of undefined

// ES5 solution
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
	teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

team.teamSummary(); // works

// ES5 Solution 2
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
	teamSummary: function() {
    var self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`;
    });
  }
};
team.teamSummary(); // also works

//ES6 solution
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
	teamSummary: function() {
    // this === team
    return this.members.map((member) => {
      // when using arrow function this is set to 'this' in the surrounding context
      return `${member} is on team ${this.teamName}`;
    });
  }
};
team.teamSummary(); // also works

//ES6 undesired 'this binding'
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
	teamSummary: () => {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
team.teamSummary(); // TypeError: Cannot read property 'members' of undefined

// Exercise: arrow functions bind the value of 'this'
// to the surrounding context, sometimes this isn't the behavior we want
// error
const profile = {
    name: 'Alex',
    getName: () => {
        return this.name;
    }
};
profile.getName(); // TypeError: Cannot read property 'name' of undefined

// solution
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};
profile.getName(); // Alex
