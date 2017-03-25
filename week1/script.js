// console.log('hello world');
//
// var x = 'hello';
//
// console.log(x);
//
// if (true) {
//   console.log('true');
// } else if (true) {
//
// } else {
//
// }
//
// var myArray = [1, 2, 3, 4, 5, "david"];
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
//
// function myFunctionName(var1, var2) {
//   console.log(var1, var2);
// }
//
// myFunctionName(1, 1);
//
// var myObject = {};
//
// // Print 'BCST(adv)' if the name is David otherwise BCST if the name is Denise
// myObject.getDegree = function () {
//   if (this.name == 'David'){
//     console.log('BSCT(adv)');
//   } else if (this.name == 'Denise') {
//     console.log('BCST');
//   }
// };
// myObject.name = 'David';
//
// myObject.getDegree();
//
// function fizzBuzz(amount) {
//   for(var i = 1; i <= amount; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, 'FizzBuzz');
//     } else if (i % 3 === 0){
//       console.log(i, 'Fizz');
//     } else if (i % 5 === 0) {
//       console.log(i, 'Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
//
// fizzBuzz(0);

// if multiple of 3, print 'Fizz', if multiple of 5, print 'Buzz' if both 'FizzBuzz'


// [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, "three"]
// [1, 2, 3, 4, 5, "three"]
//
// function removeDuplicates(array) {
//   // Implement me
//   var myArray = [];
//   for (var i = 0; i<= array.length; i++) {
//     if (inHere(array[i], myArray)) {
//       continue;
//     } else {
//       myArray.push(array[i]);
//     }
//   }
//
//   console.log(myArray);
// }
//
// function inHere (num, myArray) {
//   for (var j = 0; j<= myArray.length; j++){
//     if (myArray[j] === num) {
//       return true;
//     }
//   }
//   return false;
// }
// removeDuplicates([1, 2, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 4, 5, "three"]);


// 01010101000010101010010101010
//
// function findLongestBlock(binaryDigits) {
//   var counter = 1;
//   var nextNum = 1;
//   var maxLength = 0;
//
//
//   for (var i = 0; i<=binaryDigits.length; i++){
//     if (binaryDigits[i] === binaryDigits[nextNum]){
//       counter ++;
//     } else {
//       if (maxLength < counter){
//         maxLength = counter;
//       }
//       counter = 1;
//     }
//     nextNum ++;
//   }
//
//   console.log(maxLength);
// }
//
// findLongestBlock("01010101000000000000000000010101010000010101010");
//
// function groupElements(elements) {
//   var hashMap = {};
//   for (var i = 0; i< elements.length; i++){
//     var name = elements[i].toLowerCase();
//     if (hashMap.hasOwnProperty(name)) {
//       hashMap[name]++;
//     } else {
//       hashMap[name] = 1;
//     }
//   }
//   console.log(hashMap);
// }
//
//
// /*
// {
//   "david": 4,
//   "denise": 3,
//   "bob": 2
// }
// */
// groupElements(["david", "David", "DAVID", "Bob", "BOB", "Denise", "DaviD", "DENISE", "DenISE"]);

function sortAndPrintObject(object) {
  // get all the keys in the object and put it in an array
  var sortedKeys = [];

  for (var i in object) {
    sortedKeys.push(parseInt(i));
  }

  // sort that array with .sort
  sortedKeys = _.sortBy(sortedKeys);
  console.log(sortedKeys);
  // loop through the sorted array and access the object
  for (var i = 0; i < sortedKeys.length; i++){
    console.log(object[sortedKeys[i]]);
  }
}

var myObject = {
  1: "one",
  3: "three",
  2: "two",
  5: "five",
  10: "ten",
  9: "nine",
  7: "seven",
  6: "six",
  8: "eight",
  4: "four"
};

sortAndPrintObject(myObject);
