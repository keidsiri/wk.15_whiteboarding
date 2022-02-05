// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da

function repeatString(string){
  let newString = "";
  count = 1;
  for( let i = 0; i < string.length; i++) {
    if ( string[i] === string[i + 1]){
      count++
    } else {
      if ( count > 1) {
        newString.concat(count , string[i]);
      } else {
        newString.concat(string[i]);
      }
    }
  }
  return newString;
}

console.log(repeatString("aaabccdddddaacccdddeeee"))