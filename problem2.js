// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]
// Output: [7, 9, "hi", 12, 53]

function noDup(array) {
  let newArray = [];
  for ( let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// console.log(noDup([7, 9, "hi", 12, "hi" , 7, 53]))

//filter solution

function removeDuplicateFilter(array) {
noDupe = array.filter(function(element, index) {
  return array.indexOf(element) === index ;
  console.log(noDupe)
})
return noDupe;
}
// console.log(removeDuplicateFilter([7, 9, "hi", 12, "hi" , 7, 53]))


//recursive solution:

const testArr = [1, 1, 2, 2, 3, 3, 1, 1, 1];
const compress = ([head, ...rest]) => {
if (!head) return [];
const tail = compress(rest);
return head === tail[0] ? tail : [head, ...tail];
}
console.log(compress(testArr));