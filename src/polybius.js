// TODO: Write the polybius function
const polybiusModule = (function () {
  // change letter to code
  function toCode ( letter ) {
    // return i/j
    if ( letter === "i" || letter === "j") return "42";

    // skip spaces
    if (letter === " ") return " ";

    // create a nested array with all the numbers matching the polybius square
    let polySquare = [
      ["a", "b", "c", "d", "e"], 
      ["f", "g", "h", "(i/j)","k"],
      ["l", "m", "n", "o", "p"], 
      ["q", "r", "s", "t", "u"], 
      ["v", "w", "x", "y", "z"]
    ]

    let numOne = 0; // nested array index (j)
    let numTwo = 0; // first array index (i)

    // loop through each array and search for the letter - get the index + 1 for both arrays
    polySquare.forEach( (grid, i) => {
      grid.forEach( (letters, j) => {
        if( letters === letter ) {
          numTwo = i+1;
          numOne = j+1;
        }
      })
    });
    
    // return both numbers in a string
    return `${numOne}${numTwo}`;
  };

  // change code to letter
  function toLetter ( code ) {
    // return i / j 
    if ( code === "42") return "(i/j)";

    // skip spaces
    if ( code === " " ) return " ";

    // create polybius square
    let polySquare = [
      ["a", "b", "c", "d", "e"], 
      ["f", "g", "h", "(i/j)","k"],
      ["l", "m", "n", "o", "p"], 
      ["q", "r", "s", "t", "u"], 
      ["v", "w", "x", "y", "z"]
    ]

    // set indexes
    let indexOne = parseInt(code[1] - 1); // get first letter of string, to integer, minus 1
    let indexTwo = parseInt(code[0] - 1); // get second letter of string, to integer, minus 1

    // return the letter found at the indexes
    return polySquare[indexOne][indexTwo];
  };
  function polybius(input, encode = true) {

    return 0;
  }
  polybius("a")

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
