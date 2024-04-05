let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];




function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
function newSortedArray(array) {
  let sortedArray = [];
  let minValIndex = 0;

  while(array.length > 0){
    sortedArray.push(findMinValue(array));
    minValIndex = array.indexOf(findMinValue(array));
    array.splice(minValIndex, 1);
  }
  return sortedArray;
} 
// console.log(newSortedArray(nums3));
// console.log(nums3);

//Your function here...
function recursiveFunction(array, newArray = [] ) {
  if(array.length === 1){
    newArray.push(array[0]);
    return newArray;
  } else {
  newArray.push(findMinValue(array));
  array.splice(array.indexOf(findMinValue(array)), 1);
  recursiveFunction(array, newArray);
  }
  return newArray;
}

console.log(recursiveFunction(nums2));
