//Create an anonymous function and set it equal to a variable.
let output = function(input) {
    let finalOutput;
    if (!isNaN(input)) {
        finalOutput = input * 3;
    } else {
        finalOutput = "ARRR!";
    }
    return finalOutput;
};
let arr = ['Elocution', 21, 'Clean teeth', 100];
let mappedArray = arr.map(output);
console.log(mappedArray);
