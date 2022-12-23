// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let x of arr1) { //O(n)
//     if (arr2.indexOf(x ** 2) === -1) { //O(n)
//       return false;
//     }
//     arr2.splice(arr2.indexOf(x ** 2), 1)
//     console.log(arr2)
//   }
//   return true;
// }
// //n * n = n^2
// //time complexity O(n2)
// console.log(same([3, 2, 9], [4, 9, 81]))


const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const sequenceCounter1 = {};
  const sequenceCounter2 = {};
  for (let x of arr1) {
    sequenceCounter1[x] = sequenceCounter1[x] + 1 || 1;
  }
  for (let x of arr2) {
    sequenceCounter2[x] = sequenceCounter2[x] + 1 || 1;
  }
  for (let x in sequenceCounter1) {
    console.log(x, sequenceCounter2[x ** 2])
    // if (!(x ** 2) in sequenceCounter2) {
    //   return false;
    // }
    if (sequenceCounter2[x ** 2] !== sequenceCounter1[x]) {
      return false;
    }
  }
  return true;
}

console.log(same([3, 2, 8], [4, 81, 9]))