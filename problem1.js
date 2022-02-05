// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"

function noSpace(sentence){
  const words = sentence.split(" ")
  let newline = [];
  if (words !== ""){
    for ( let i = 0; i < words.length; i++) {
      newline += words[i] + "%20";
    }
  }
  return newline.slice(0,-3);
}

// console.log(noSpace("Jasmine Ann Jones Kate"))

// refactor 

function replaceSpace(string) {
  return string.split(" ").join("%20");
}

// console.log(replaceSpace("Jasmine Ann Jones Kate"));

//recursion

function replaceSpace(string) {
    if (string.length === 1){
      if(string[0] === " ") {
        return "%20";
      } return string[0];
    }
    let index = string.charAt(0);
    if (string.charAt(0) === " ") {
      index = "%20"
    }
    return index.concat(replaceSpace(string.substring(1)));
  }

  console.log(replaceSpace("A B C D"))
