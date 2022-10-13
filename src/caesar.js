const caesarModule = (function () {

  // INPUT = string, number, boolean
  function caesar(input, shift = 0, encode = true) {
    // If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (shift === null || shift === undefined || shift === 0 || shift < -25 || shift > 25) return false;

    // Split string into an array
    let letters = input.toLowerCase().split("");
    
    // Loop through array to change letter to variable.charCodeAt(index) (a = 097, z = 122) -- make sure to skip spaces
    let result = letters // 110, 100, 119, 124, 100
      .map( letter => {
        // skip spaces
        if ( letter === " " ) return " ";
        // shift charcode to encode letter
        return letter.charCodeAt( 0 ) + shift;
      })
      // If above 122, start over at 97. If below 97, start back at 122.
      .map ( letter => {
        // skip spaces
        if( letter == " " ) return " ";
        // start back at the letter "a" if past "z"
        if( letter > 122 ){
          // calculate total number above 122
          const overage = letter - 122
          // add overage to 96 to start at "a"
          return 96 + overage;
        }
        // start back at the letter "z" is past "a"
        if ( letter < 97 ){
          // calculate total number below 97
          const lack = 97 - letter;
          // subtract lack from 122 to start at "z" 
          return 123 - lack;
        }
        return letter;
      })
    // Change array back to letter String.fromCharCode(numbers)
    .map( letter => {
      if ( letter === " " ) return " ";
      return String.fromCharCode( letter );
    })
    // join array back into a string
    .join("");

    console.log(result);
    return result;
  } // OUTPUT = string

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
