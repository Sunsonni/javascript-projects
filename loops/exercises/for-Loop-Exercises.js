// Exercise #1: Construct for loops that accomplish the following tasks:
//     a. Print the numbers 0 - 20, one number per line.
        for(let numI = 0; numI < 21; numI++){
          console.log(numI + "\n");
        }

//     b. Print only the ODD values from 3 - 29, one number per line.
        for (let oddValues = 3; oddValues < 30; oddValues = oddValues+2) {
          console.log(oddValues + "\n");
        }

//     c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
        for(let evenNums = 12; evenNums > -15; (evenNums = evenNums -2)){
            console.log(evenNums + "\n");  
        }

//     d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). 
        for (let descendingOrder = 50; descendingOrder > 19; descendingOrder--) {
          if (descendingOrder % 3 === 0) {
              console.log(descendingOrder);
          }
        }


// Exercise #2: 
// Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
        let string = 'LaunchCode';
        let launchArray = [1, 5, 'LC101', 'blue', 42];

// Construct ``for`` loops to accomplish the following tasks:
//   a. Print each element of the array to a new line.
        for(let arrayI = 0; arrayI < launchArray.length; arrayI++) {
            console.log(launchArray[arrayI]);
        }

//   b. Print each character of the string - in reverse order - to a new line.  
        for( let reverse = 10; reverse > -1; reverse--) {
            console.log(string[reverse] + "\n")
        }

// /Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
//   a. One array contains the even numbers, and the other holds the odds.
//   b. Print the arrays to confirm the results. 
      let sortingArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
      let evenArray = [];
      let oddArray = [];

      for(let i = 0; i < sortingArray.length; i++) {
        if (sortingArray[i] % 2 === 0) {
          evenArray.push(sortingArray[i]);
        } else {
          oddArray.push(sortingArray[i]);
        }
      }
      console.log(evenArray);
      console.log(oddArray);