const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";


//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();

equipment = equipment.split(',').sort();

pets = pets.split(',').sort();

sleepAids = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    food,
    equipment,
    pets,
    sleepAids
];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput = input.question("Pick a cabinet from 0-3:\n");
userInput.trim();
let userSelectedItem = input.question("What are you looking for?\n");
userSelectedItem = userSelectedItem.trim().toLowerCase()
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
let sentence = `The items in the cabinet ${userInput} are:\n`;

// if (userInput === "0") {
//     console.log(sentence + cargoHold[0])
// } else if (userInput === "1") {
//     console.log(sentence + cargoHold[1])
// } else if (userInput === "2") {
//     console.log(sentence + cargoHold[2])
// } else if (userInput === "3") {
//     console.log(sentence + cargoHold[3])
// } else {
//     console.log("That is not a valid answer");
//}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (userInput === "0") {
    if (cargoHold[0].includes(userSelectedItem)) {
        console.log(`Cabinet does contain ${userSelectedItem}`)
    } else {
        console.log(`Cabinet does not contain ${userSelectedItem}`)
    }   
} else if (userInput === "1") {
    if (cargoHold[1].includes(userSelectedItem)) {
        console.log(`Cabinet does contain ${userSelectedItem}`)
    } else {
        console.log(`Cabinet does not contain ${userSelectedItem}`)
    }
} else if (userInput === "2") {
    if (cargoHold[2].includes(userSelectedItem)) {
        console.log(`Cabinet does contain ${userSelectedItem}`)
    } else {
        console.log(`Cabinet does not contain ${userSelectedItem}`)
    } 
} else if (userInput === "3") {
    if (cargoHold[3].includes(userSelectedItem)) {
        console.log(`Cabinet does contain ${userSelectedItem}`)
    } else {
        console.log(`Cabinet does not contain ${userSelectedItem}`)
    }
} else {
    console.log("That cabinet doesn't exist!");
}