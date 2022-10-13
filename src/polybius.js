// TODO: Write the polybius function
const polybiusModule = (function () {

  // change letter to code
  function toCode ( letter ) {
    let result = [];

    // change letter to first number
    switch ( letter ) {
      case "a":
      case "f":
      case "l":
      case "q":
      case "v":
        result.push( "1" );
        break;
      case "b":
      case "g":
      case "m":
      case "r":
      case "w":
        result.push( "2" );
        break;
      case "c":
      case "h":
      case "n":
      case "s":
      case "x":
        result.push( "3" );
        break;
      case "d":
      case "i":
      case "j":
      case "o":
      case "t":
      case "y":
        result.push( "4" );
        break;
      case "e":
      case "k":
      case "p":
      case "u":
      case "z":
        result.push( "5" );
        break;
      default:
        return " ";
    }

    // change letter to second number
    switch ( letter ) {
      case "a":
      case "b":
      case "c":
      case "d":
      case "e":
        result.push( "1" );
        break;
      case "f":
      case "g":
      case "h":
      case "i":
      case "j":
      case "k":
        result.push( "2" );
        break;
      case "l":
      case "m":
      case "n":
      case "o":
      case "p":
        result.push( "3" );
        break;
      case "q":
      case "r":
      case "s":
      case "t":
      case "u":
        result.push( "4" );
        break;
      case "v":
      case "w":
      case "x":
      case "y":
      case "z":
        result.push( "5" );
        break;
      default:
        return " ";
    }

    // return both numbers in a string
    return result.join("");
  };

  // change code to letter
  function toLetter ( code ) {
    
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
