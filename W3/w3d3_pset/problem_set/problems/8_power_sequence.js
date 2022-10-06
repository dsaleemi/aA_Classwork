/***********************************************************************
Write a function `powerSequence(base, length)` that takes in two numbers,
`base` and `length`. The function should return an array containing a
power sequence with the given `length`. Assume that the `length` is at
least 1.

The first number of a power sequence begins with `base`. The second
number of the sequence is the product between the first number and the
base. The third number of the sequence is the product between the second
number and the base...

Examples:

powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3); // => [ 8, 64, 512 ]
***********************************************************************/



function powerSequence(base, length){
    let seq = [base];  // start off ...arr w/ base
                      

    while(seq.length < length){ // while the base length is not long enough
        let last = seq[seq.length - 1]; // initialize last idx of the arr
        let next = last * base; // when its not long enough times the last num in the arr w the base
        seq.push(next); // push the ele into the base arr
    }
    return seq;
}
//*** SECOND WAY OF SOLVING IT ******/

function powerSequence(base, length){
    let newArr = [base];        //have the array start w base 

    for(let i = 0; i < length - 1; i++){ // -1** to get actual length, i gives us index @ 0
        let last = newArr[newArr.length - 1]; // initialize last ele of newArr
        let next = last * base; // initialize the next ele of newArr
        newArr.push(next); // push next ele into newArr
    }
    return newArr;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = powerSequence;
