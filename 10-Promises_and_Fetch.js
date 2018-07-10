//-------------------------------//
// Promises and Fetch
//-------------------------------//
const promise = new Promise((resolve, reject) => {
  // automatically provided arguments resolve and reject
  // pending, resolved, rejected
  // resolve();
  reject();
});

promise
  .then(() => console.log('Finished'))
  .then(() => console.log('Also Finished'))
  .catch(() => console.log('Oh no!'));
//////////////////////////////
// Async code with promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

const promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest()
  // make request
  request.onload = () => {
    resolve();
  };
});

//////////////////////////////

// Most common use of promises
// Use with the fetch helper
// fetch is function to make ajax request that is a part of the browser
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  // you cannot read the data directly with fetch
  // You have to run a method of .json() on it to read the data (fetch sucks)
  .then(response => response.json())
  .then(data => console.log(data));

///////////////////////////////

// Shortcomings of fetch
// recommendatiomn to use ajax utility libraries like axios, superagent or even jquery
// status 200 is success
// errors are 300 or above

badUrlEndpoint = "https://jsonplaceholder.typicode.com/posts1212431412/";

fetch(badUrlEndpoint)
  // if the request hits a server and gets a failed status code
  // it will hit then instead of catch case
  .then(response => response.json())
  // with this bad endpoint the catch is never reached
  // thats why fetch sucks
  // only if we give a domain name that doesnt exist does the catch case kick in
  .catch(error => console.log('BAD', error));
