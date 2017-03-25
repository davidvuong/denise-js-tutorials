// function myAsyncFunction() {
//
// }
// setTimeout(myAsyncFunction, 1000);
//
// setTimeout(function () {
//
// }, 1000);

function myPromiseFunction(resolve, reject) {
  if (Math.random() > 0.5) {
    resolve('this was successful');
  } else {
    reject('there has been an error');
  }
}

function mySuccessFunction(data) {
  console.log('success!' + data);
}

function myErrorFunction(error) {
  console.log('failure' + error);
}

function main() {
  var myPromise = new Promise(myPromiseFunction);
  myPromise.then(mySuccessFunction, myErrorFunction);

  // myPromise.then(function mySuccessFunction() {
  //
  // }, function myErrorFunction() {
  //
  // });
  // new Promise(function (resolve, reject) {
  //   if (Math.random() > 0.5) {
  //     resolve('this');
  //   } else {
  //     reject('that');
  //   }
  // }).then(function (data) {
  //   console.log('success!' + data);
  // }, function (error) {
  //   console.log('failure' + error);
  // });
}

main();
