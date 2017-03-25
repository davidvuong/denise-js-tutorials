function mySetTimeoutFunction(resolve_, reject_) {
  if (Math.random() > 0.5) {
    resolve_(true);
  } else {
    reject_(false);
  }
}

function main() {
  new Promise(function (resolve, reject) {

    var myArguments = [resolve, reject];
    setTimeout(mySetTimeoutFunction, 500, myArguments);

  }).then(function (data) {
    console.log('success', data);
  }, function (error) {
    console.log('error', error);
  });
}

// setTimeout(function, interval, argumentsForTheFunction);

main();

// 
// function mySetTimeout(aCustomFunction, anInterval, myFunctionsArgumentsArray) {
//   aCustomFunction(myFunctionsArgumentsArray[0], myFunctionsArgumentsArray[1])
// }
