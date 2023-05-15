// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line


  for (let i = 0; i < encodedString.length; i++) {
    const charCode = encodedString.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let decodedCharCode = charCode + 13;

      if (decodedCharCode > 90) {
        decodedCharCode = decodedCharCode - 26;
      }

      const decodedChar = String.fromCharCode(decodedCharCode);
      decodedArray.push(decodedChar);
    } else {
      decodedArray.push(encodedString[i]);
    }
  }


  return ;//return decodedArr
}

function rot13(encodedString) {
  // Create a variable to store the decoded string
  let decodedString = "";

  // Iterate through each character in the encoded string
  for (let i = 0; i < encodedString.length; i++) {
    // Get the ASCII code of the current character
    const charCode = encodedString.charCodeAt(i);

    // Check if the character is a letter (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      // Perform the ROT13 transformation by adding 13 to the ASCII code
      let decodedCharCode = charCode + 13;

      // If the decoded character code exceeds 'Z', wrap around to 'A'
      if (decodedCharCode > 90) {
        decodedCharCode = decodedCharCode - 26;
      }

      // Convert the decoded character code back to a letter
      const decodedChar = String.fromCharCode(decodedCharCode);

      // Append the decoded character to the decoded string
      decodedString += decodedChar;
    } else {
      // If the character is not a letter, pass it on unchanged
      decodedString += encodedString[i];
    }
  }

  // Return the decoded string
  return decodedString;
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
