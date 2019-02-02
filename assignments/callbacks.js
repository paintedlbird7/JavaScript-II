// Create a callback function and invoke the function to test your work. 
//You have been provided an example 
//of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// function getLength(arr, cb) {
//   return cb(arr.length);
// }

// getLength(items, function(length) {
//   console.log(length) //4
// });







function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

// // Potential Solution:
// function lastItem(arr, cb) {
//   return cb(arr[3]);
// }

// lastItem(items, function(last) {
//   console.log(last) //Gum
// });






var sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}
//   cb(x + y);
// };

// sumNums(2, 3, function(sum) {
//   console.log('The sum is ' + sum);
// });








function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let total = x * y;
  return cb(total);
//   cb(x * y);
// };

// multiplyNums(2, 3, function(multipication) {
//   console.log('The multipication is ' + multipication);
// });








function contains(item, list, cb) 

for(let i = 0; i < list.length; i++) {
  if(list[i] === item) {
    result = true;
  }
  else result = false;
}
return cb(result);


	

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.




















/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
