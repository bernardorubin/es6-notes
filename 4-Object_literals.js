//-------------------------------//
// Enhanced Object literals
//-------------------------------//
// ES5
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
			return this.inventory.find(book => book.title === title).price
    }
  };
}

// ES6
function createBookShop(inventory) {
  return {
    // if the key and value have the same name -> condense to a singl statement
    inventory,
    // omit word function when in key value pair the value is a function
    inventoryValue() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue(); // returns 25
bookShop.priceForTitle('Harry Potter'); // returns 10

// real world example
// ES5
function saveFile(url, data) {
  $.ajax({ method: 'POST', url: url, data: data });
}
// ES6
function saveFile(url, data) {
  // first write condensed ones and at the end: key, value pairs
  $.ajax({ url, data, method: 'POST' });
}
const url = 'http:fileupload.com';
const data = { color: 'red' };

saveFile(url, data);

// last example
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
