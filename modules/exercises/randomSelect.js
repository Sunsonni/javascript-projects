function randomFromArray(arr){
  let selectedElement = arr[Math.floor(Math.random() * arr.length)];
  return selectedElement;
}
//TODO: Export the randomFromArray function.
module.exports = randomFromArray;