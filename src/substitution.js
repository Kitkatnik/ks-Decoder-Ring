const substitutionModule = (function () {

  function toCharCode ( startingInput, alphabetArray ) {
    const codeIndex = [];

    // create an array with the actual alphabet
    ;
    startingInput.forEach( ( letter ) => {
      // find the current letter in the letters array and push the index to codeIndex.
      if ( letter !== " " ) {
        codeIndex.push( alphabetArray.indexOf( letter ) );
      } else {
        codeIndex.push( " " );
      }
    })
    return codeIndex;
  }

  function toCoding ( codeIndex, array ){
    const endingInput = [];
    codeIndex.forEach( (charCode) => {
      // create a new array using the codeAlphabet[index]
      if( charCode !== " " ){
        endingInput.push( array[charCode] );
      } else {
        endingInput.push( " " );
      }
      
    })
    return endingInput;
  }

  function substitution(input, alphabet, encode = true) {
    // check the alphabet for 26 characters
    if ( alphabet.length !== 26 ) return false;

    // create an array with the alphabet parameter
    let codeAlphabet = alphabet.split("");

    // check the alphabet for unique characters -- loop through string, find index of character. If index matches current foreach index, continue. If not (there's multiple characters in the string so it picks up an earlier index), return false.
    for ( let i = 0; i < codeAlphabet.length; i++ ) {
      if ( codeAlphabet.indexOf(codeAlphabet[i]) !== i ) return false;
    };

    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u","v","w","x","y","z"]
    let startingInput = input.toLowerCase().split(""); // add input to array
    let endingInput = [];
    let codeIndex = [];

    // check if encoding or decoding
    if ( encode === true ) { // change message to code
      codeIndex = toCharCode( startingInput, letters ); // change letters to index found in letters array
      endingInput = toCoding( codeIndex, codeAlphabet ); // find letters in codeAlphabet by index
    }
    if ( encode === false ) { // change code to message
      codeIndex = toCharCode( startingInput, codeAlphabet );
      endingInput = toCoding( codeIndex, letters );
    }
    //return final string
    return endingInput.join("");
  }

  substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
  // elp xhm xf mbymwwmfj dne

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
