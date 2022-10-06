/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

function pairsToString(arr){
  let str = "";

  for(let i = 0; i < arr.length; i++){
    let subArray = arr[i]; // this iterates through the first arr
    let char = subArray[0]; // this iterates through the letters of arr
    let num = subArray[1];// this iterates through the numbers of arr

    for(let j = 0; j < num; j+= 1){ // this iterates 'num' number of times
      str += char; // adding the letters to the ('' string) ('num') number of times
    }
  }
  return str; 
}

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

console.log(pairsToString(array2)); // => 'food!'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
