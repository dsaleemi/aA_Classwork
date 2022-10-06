/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str){
  let collapsed = '';

  for(let i = 0; i < str.length; i++){
    let char = str[i];
    let lastChar = collapsed[collapsed.length - 1]; // setting a last char in the empty str as a var

    if(char !== lastChar){ // checking if the current char is not the same as prev char
      collapsed += char; // if not the same then we can add it to the new str
    }
  }
  return collapsed;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
