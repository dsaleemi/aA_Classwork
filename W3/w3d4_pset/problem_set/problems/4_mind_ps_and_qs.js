/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1

mindPsAndQs('APCDQQPPC'); // => 4

mindPsAndQs('PQPQ'); // => 4

mindPsAndQs('PPPXQPPPQ'); // => 5

***********************************************************************/


function mindPsAndQs(word){
    let longestStreak = 0;
    let currentStreak = 0;

    for(let i = 0; i < word.length; i++){ // loop thru the word 
        let char = word[i]; // grabbing the letters of the word

        if(char === "P" || char === "Q"){ // if the letters equal to p or q 
            currentStreak += 1; // add 1 to the current streak 

        } else if (currentStreak > longestStreak){ // if it turns out false... 
            longestStreak = currentStreak;

        } else {
            currentStreak = 0;
        }

        if(i === word.length - 1 && currentStreak > longestStreak){ // if the last index is larger than the longestStreak
            longestStreak = currentStreak; // initialize the longestest streak to current 
        }
    }
    return longestStreak;
}


console.log(mindPsAndQs('APCDQQPPC'))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = mindPsAndQs;
