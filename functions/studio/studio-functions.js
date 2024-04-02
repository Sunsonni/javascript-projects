//Reverses characters in strings
function reverseCharacters(myVariableName) {
    let reversedString = "";
    if (typeof myVariableName === "number") {
        myVariableName = String(myVariableName);
        reversedString = myVariableName.split("").reverse().join("");
        reversedString = Number(reversedString);
        console.log(typeof reversedString);
    }   else {
        reversedString = myVariableName.split("").reverse().join("");
    }


    return reversedString;
}
console.log(reverseCharacters("ANY RANDOM STRING"));

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

//Reverses the full array as well as strings
function reverseArray(inputArray) {
    let array = [];
    for (let i = 0; i < inputArray.length; i++) {
        array.push(reverseCharacters(inputArray[i]))
    }
    return array.reverse();
}
console.log(reverseArray(arrayTest1));

// Bonus Missions
    // creates a fun phrase from string given
function funPhrase(string) {
    let newString = "";
    if (string.length <= 3) {
        newString = string.slice(-1)
    }   else {
        newString = (string.slice(0, 3));
    }
    return (`We put the ${newString} in ${string}. COOOOL.`)
    
    //We put the fun in function.
    //We put the t in put
}
console.log(funPhrase("ABCDEF"));

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

let str = "Functions rock!";
console.log(funPhrase(str));

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”

function areaOfRectangle(length, width){
    let area = 0;
    if(length === undefined || width === undefined) {
        area = length * length;
    } else {
    area = length * width;
    }
    return area;
}
console.log(`The area is ${areaOfRectangle(2,4)} cm^2.`);
