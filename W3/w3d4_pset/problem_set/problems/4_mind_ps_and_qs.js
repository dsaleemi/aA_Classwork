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

    for(let i = 0; i < word.length; i++){
        let char = word[i];

        if(char === "P" || char === "Q"){
            currentStreak += 1;
        } else if (currentStreak > longestStreak){
            longestStreak = currentStreak;
        } else {
            currentStreak = 0;
        }

        if(i === str.length - 1 && currentStreak > longestStreak){
            longestStreak = currentStreak;
        }
    }
    return longestStreak;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = mindPsAndQs;
