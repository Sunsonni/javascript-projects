const input = require('readline-sync');

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  let i = 0

  while (i < numMeals && i < protein.length) {
    let meal = [];
    for (let j = 0; j < pantry.length; j++) {
      meal.push(pantry[j][i]);
    }
    i++;
    meals.push(meal);
  }
  return meals;
}


function askForNumber() {
  let numMeals = input.question("How many meals would you like to make? ");
  numMeals = Number(numMeals);
  console.log(numMeals);
  while (isNaN(numMeals) || numMeals < 1 || numMeals > 6) {
    numMeals = input.question("How many meals would you like to make? ")
    numMeals = Number(numMeals);
  }

  return numMeals;
}


function generatePassword(string1, string2) {
  let numberOfLoops = 0;
  if (string1.length < string2.length) {
    numberOfLoops = string1.length;
  }
  else {
    numberOfLoops = string2.length;
  }
  let code = '';
  let i = 0;
  // alternate characters
  for (i = 0; i < numberOfLoops; i++) {
    code += string1[i] + string2[i];
  }
  // leftover characters
  if (string1.length > i) {
    code += string1.slice(i);
  }
  if (string2.length > i) {
    code += string2.slice(i);
  }

  return code;
}

function runProgram() {  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(meals)

  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

  let password1 = 'ABCDEFG';
  let password2 = '123456789';
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};