/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/
function sillyCipher(sentence, cipher){

  let newWord = ' ';                                  // setting empty string

  for(let i = 0; i < sentence.length; i++){           // looping thru sent
    let char = sentence[i];                           // grabbing char's

    if(cipher[char] === undefined){                   // if char keyed into CIPHER is undefined (cant find the value )
      newWord += ".";                                 // add a period to the new string
    } else {
      newWord += cipher[char];                        // add the value of the obj into the string
    }
  }
  return newWord;
}

console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})) //=> 'cxxro'
console.log(sillyCipher("apple", { a : "c", p : "x"})) //=> 'cxx..'
console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})) //=> '.ee....q.q..q!'
console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"})) //=> 'dan..''



// // two dice : value of 1- 6 return [[1, 5], [...]]
// // two values will equal to target
// // loop thru array of numbers twice 
// // if its unique : i + 1;
// // if not : j = 0
// // num1 + num2 = target : return


// function dicePair(number, target){

//   let newArr = [];

//   for(let i = 0; i <= number.length; i++){
//     let first = number[i];
//     for(let i = number.length; i >= 0; i++){
//       let second = number[j];

//       if(first + second === target){
//         newArr.push([first, second])
//       }
//     }
//   }
//   return newArr;
// }


// console.log(dicePair())
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;