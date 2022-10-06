/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function charCount(string){
    let count = {}; // creating an obj to count char in the string

    for(let i = 0; i < string.length; i++){ // iterating through the string
        let char = string[i]; 

        if(count[char] === undefined){ //checking if char is not a key inside obj
            count[char] = 1; // if not, add it to obj
        } else {
            count[char] += 1; // if char is in obj, increment it
        }
    }
    return count;
}
charCount('aaaalvin'); // => {a: 4, l: 1, v: 1, i: 1, n: 1}

function countRepeats(string) { 

    let count = charCount(string); // taking the obj we get from above and saving it to a var
    let numRepeat = 0; // used as a counter
 
    for(let letter in count){ // looping through the obj  
        let letterCount = count[letter]; //value of the letter 

        if(letterCount > 1){ // if its greater than 1
            numRepeat += 1; // increment 
        }
    }
    return numRepeat;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = countRepeats;
