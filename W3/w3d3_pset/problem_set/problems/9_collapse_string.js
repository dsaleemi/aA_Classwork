/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str) {

    let newStr = " ";

    for(let i = 0; i < str.length; i++){
        let char = str[i];  // grab the character of the string 
        

        if(char !== newStr[newStr.length - 1]){ // if the character does not equal to last i of newstr
            newStr += char; // add the char to newstr
        } 
    }
    return newStr;
}
//*** reason why we are doing last i of newstr is because we need to compare char to that last char in new str
// if we do  = newstr then its comparing the string at whole so for apple... 'ap' === 'p'... no then add it again to the newstr and we dont want that for this prob/ 
console.log(collapseString('AAAaalviiiiin!!!'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
