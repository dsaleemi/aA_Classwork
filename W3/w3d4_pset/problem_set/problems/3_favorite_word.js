/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string.
The function should return the word in the sentence that contains `favoriteLetter` the most. 
If there are ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function countWords(letter, word){ // set a helper func
    let count = 0;  

    for(let i = 0; i < word.length; i++){       
        if(word[i] === letter){         // if the an any letters in word = letter
        count += 1;                     // add one
        }
    }
    return count;                       
}

// function favoriteWord(favoriteLetter, sentence){
//     let words = sentence.split(' ');  //breaking the sentence
//     let fav = "";


//     for(let i = 0; i < words.length; i++){  // looping thru words from sent
//        let word = words[i]; // grabbing individual word
//        if(countWords(favoriteLetter, word) > countWords(favoriteLetter, fav)){ // applying the func... SETTING PARAMETERS DIFF!!
//         fav = word;
//        }
//     }
//     return fav; 
// }


//********another way of solving it*******/
function favoriteWord(favoriteLetter, sentence) {

    let words = sentence.split(' ');
    let favWord = ''
    let max = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let current = countWords(favoriteLetter, word);
        if (current > max) {
            favWord = word;
        } 
    }
    return favWord;
}


console.log(favoriteWord('p', 'sinful caesar sipped his snifter'))
console.log(favoriteWord('a', 'sinful caesar sipped his snifter')) 
console.log(favoriteWord('s', 'sinful caesar sipped his snifter')) 
console.log(favoriteWord('x', 'sinful caesar sipped his snifter'))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = favoriteWord;
