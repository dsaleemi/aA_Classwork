/***********************************************************************
Write a function `mySelect(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. It should return a new array of all the elements
in the input array `arr` where the callback `cb` returns true.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

mySelect([1,2,3,4,5,6], isEven); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]

Note that in the examples above, the callback functions only expect a
single paramter, but your `mySelect` function should still try to pass 3
parameters to the callback. This allows us to create a versatile
`mySelect` function that works with various callbacks.
***********************************************************************/



function mySelect(arr, cb) {

  let newArr = [];

  for(let i = 0; i <= arr.length; i++){ 
    let ele = arr[i];
    if (cb(ele, i, arr)){ // grabbing the functions and applying it to the parameters
      newArr.push(ele) // pushing the numbers to the array
    }
  }
  return newArr;
}

//// second way of solving it
function mySelect(arr, cb){

  newArr = [];
  
  for(let i = 0; i < arr.length; i++){
   if(cb(arr[i]) === true){ /// if the callback goes through the ele and returns true
     newArr.push(arr[i]); //... have those specfic ele be pushed into the newarr
   }
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mySelect;
