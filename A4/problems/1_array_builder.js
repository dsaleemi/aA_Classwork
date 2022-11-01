/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

// function arrayBuilder(count){
//   let newArr = [];              // new array to throw in elements

//   for(let key in count){      // loop into the object to grab the values 
//     let value = count[key];                       // gives us a number element 

//     for(let i = 0; i < value; i++){               // loop through the number 
//       newArr.push(key);                           // amount of numbers... PUSH THE KEY
//     }
//   }  
//   return newArr;                
// }


console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
