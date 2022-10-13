const caesarModule = (function () {

  function alphabetCoverage( array, regex ){
    return array.map ( letter => {
      // skip spaces
      if( regex.test( letter ) ) return letter;
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
  }
  // INPUT = string, number, boolean
  function caesar(input, shift = 0, encode = true) {
    // If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (shift === null || shift === undefined || shift === 0 || shift < -25 || shift > 25) return false;

    // Split string into an array
    let letters = input.toLowerCase().split("");

    const regex = /\W/;
    
    // Loop through array to change letter to variable.charCodeAt(index) (a = 097, z = 122) -- make sure to skip spaces
    let shifted = [];
    let result = [];
    
    if( encode === true ){
      shifted = letters
      .map( letter => {
        // skip spaces
        if ( regex.test( letter ) ) return letter;
        // shift charcode to encode letter
        return letter.charCodeAt( 0 ) + shift;
      });
    
      // If above 122, start over at 97. If below 97, start back at 122.
      result = alphabetCoverage( shifted, regex )
      
      // Change array back to letter String.fromCharCode(numbers)
        .map( letter => {
          if ( regex.test( letter ) ) return letter;
          return String.fromCharCode( letter );
        })
        // join array back into a string
        .join("");
    } else {
      shifted = letters
        .map( letter => {
          if ( regex.test( letter ) ) return letter;
          return letter.charCodeAt( 0 ) - shift;
        });
      
      result = alphabetCoverage( shifted, regex )
        .map( letter => {
          if( regex.test( letter ) ) return letter;
          return String.fromCharCode( letter );
        })
        .join("");
    }
    return result;
  } // OUTPUT = string
  caesar("wklqnixo", 3, false);

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
