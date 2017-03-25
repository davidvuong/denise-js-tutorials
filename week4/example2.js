// I want you to create a promise where I use settimeout to another function
// In that function, it takes in 1 argument and that argument is the number of shoes that I have
// if Math.random() > 0.5 then resolve n shoes ("I have 3 shoes") else "I don't know how many"

var NUMBER_OF_SHOES = parseInt(Math.random() * 10, 10);

function myAsyncFunction(resolve, reject, numberOfShoes) {
  if (Math.random() > 0.5) {
    resolve(numberOfShoes);
  } else {
    reject();
  }
}

function mySuccessFunction(data) {
  console.log("I have " + data + " shoes");
}

function myFailFunction(error) {
  console.log("I don't know how many");
}

function timer(resolve, reject) {
  setTimeout(myAsyncFunction, 1000, resolve, reject, NUMBER_OF_SHOES);
}

function main() {
  var myPromise = new Promise(timer);
  myPromise.then(mySuccessFunction, myFailFunction);
}

main();
