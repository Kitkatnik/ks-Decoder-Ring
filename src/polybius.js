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

  function splitString ( string ) {
    let result = [];

    // loop through string
    for ( let i = 0; i < string.length; i++){
      // skip spaces
      if ( string[i] === " " ) {
        result.push(" ")
      } else {
        // push two numbers at a time, and then index+=2
        result.push(string.slice( i, i + 2 ) );
        i++;
      };
    }

    // return array of string broken up to two numbers each
    return result;
  }
  function polybius(input, encode = true) {

    let result = [];

    if ( encode === false ) {
      // count to make sure string has even number
      let countString = input.replace(" ", "");
      if ( countString.length % 2 != 0) return false;

      // change input to an array
      let codes = splitString( input );
      console.log( "INPUT SPLIT INTO ARRAY");
      console.log(codes);

      // loop through array and push letter to array
      codes.forEach( code => {
        console.log( "JUST A LETTER");
        console.log(code);
        result.push( toLetter( code ) )
        console.log("THE RESULT")
        console.log(result);
      } );

    }

    if ( encode === true ) {
      // change all letters to lower case and split into array
      result = input.toLowerCase().split("");

      // loop through array and change the letter into a code using helper function
      result.forEach( ( letter, index ) => result[index] = toCode( letter ) )
    }
    console.log("RESULT TOGETHER");
    console.log(result.join(""));

    // return result array joined into a string
    return result.join("")
  }
  polybius("3251131343 2543241341");

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
