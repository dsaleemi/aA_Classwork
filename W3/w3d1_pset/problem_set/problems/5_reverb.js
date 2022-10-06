/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {

    let vowels = 'aeiou';

    for(let i = word.length; i >= 0; i--){
        let char = word[i];

        if(vowels.indexOf(char) > -1 ){ // if vowel is in the word
            let afterVowel = word.slice(i); // grab the char's after that vowel
            return word + afterVowel; // add it into the original word
        }
    }
   return word;
}

console.log(reverb('running'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
