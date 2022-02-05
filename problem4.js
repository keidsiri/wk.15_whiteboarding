// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example

// Input: "hello"

// Output: false
// Input: "copyright"
// Output: true

function unique (word) {
  const wordLower = word.toLowerCase();
  const wordSet = new Set(wordLower);
  const lenWord = wordLower.length;
  const lenWordSet = wordSet.size;

  if (lenWord === lenWordSet) {
      return true;
  } else {
      return false;
  }
}
// console.log(unique("hello"))
// console.log(unique("copyright"))


// or 
function isUnique(str) {
  return new Set(str).size === str.length;
}

console.log(isUnique("hello"))

// recursive

const uniqueString = (string) => {
  if(string.length === 1) return true;
  for ( let i = 1 ; i < string.length; i++) {
    if ( string[0] === string[i]) return false;
  }
  return uniqueString( string.substring(1));
}