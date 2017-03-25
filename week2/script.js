// function compareObjects(obj1, obj2){
//     var obj1Keys = Object.keys(obj1);
//     var obj2Keys = Object.keys(obj2);
//
//     if (obj1Keys.length !== obj2Keys.length) {
//         return false;
//     }
//
//     for (var i = 0; i < obj1Keys.length; i++){
//         var key = obj1Keys[i];
//         if (x[key] !== y[key]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// // true if it is equal
// // false if it is not equal
// console.log(compareObjects({ a: 1, b: 2}, { a: 1, b: 3 })); // false
// console.log(compareObjects({ a: 1, b: 2}, { a: 1 }));  // false
// console.log(compareObjects({ a: 1, b: 2}, { a: 1, b: 2 })); // true
//
// //
// // x = {};
// //
// // x.myKey = 1;
// //
// // var myKey2 = "blahblah";
// //
// // x.myKey2 = 2;
// // x[myKey2] = 2; // x["blahblah"] = 2; x.blahblah = 2
//


findAverageMiddle([
    [1, 2, 3, 4, 5],
    [1, 10, 2, 3, 5],
    [5, 50, 1, 2, 3, 10, 9],
    [99, 71, 123, 444, 123]
])  // (3 + 2 + 2 + 123) / 4 =


function findAverageMiddle (averageMiddle) {

    var width;
    var height = averageMiddle.length;

    var sum = 0;
    var middleNum;

    for (var i = 0; i < height; i++) {

        currentArr = averageMiddle[i];
        width = currentArr.length;
        middleNum = Math.floor(width/2);

        sum = sum + currentArr[middleNum];
    }

    console.log(sum/height);
}
