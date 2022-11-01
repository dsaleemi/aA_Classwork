/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/
// // split the sentence apart
// //loop through the words itself
// // grab the length
// //compare the length to each other 
// // which ever is the greatest return that length 
// // return the later word... loop bckwards


function longestWord(sentence){
  let words = sentence.split(' ');                                // splitting the sentence apart 
  let longWord = " ";


  for(let i = words.length; i > 0; i--){                        // wants the latest word... loop bkwrd
    let word = words[i];                                          

    if(word.length > longWord.length){                            //if the word length is greater than longWords length
      longWord = word;                                            // have longWord equal to that word
    }
  }
  return longWord;
}

console.log(longestWord('app academy is cool')); // => 'academy'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
