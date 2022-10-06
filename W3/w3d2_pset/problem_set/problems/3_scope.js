// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/3_scope.js`

var foo = "Happy"; // global used VAR

for (var foo = 0; foo <= 5; foo += 1) {
  // console.log(foo); //What will foo be on each iteration?
}

console.log(foo); //What will foo be on this line?
