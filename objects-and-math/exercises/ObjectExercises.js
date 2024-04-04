let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

let crew = [superChimpOne, superChimpTwo, dog, salamander, waterBear];

//function that assigns random Astronaut ID number to crew member
function createAstronautID(crew) {
  
   for(let i = 0; i < crew.length; i++) {
      crew[i]['astronautID'] = availableNumbers.shift(shuffle(availableNumbers));
   }
   return crew;
}

let availableNumbers = [1,2,3,4,5,6,7,8,9,10];

//Function that shuffles the numbers in avaiable numbers array
function shuffle(availableNumbers){
   for (let i = availableNumbers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [availableNumbers[i], availableNumbers[j]] = [availableNumbers[j], availableNumbers[i]];
    }
   return availableNumbers;
}

//function that moves astronauts a random amount from 0-10
function move(crew){
   for(let i = 0; i < crew.length; i++) {
      crew[i]['move'] = Math.floor(Math.random() * 11);;
   }
   return crew;
}

function crewReports(animalInfo){
   console.log(`${animalInfo.name} is a ${animalInfo.species}. They are ${animalInfo.age} years old and ${animalInfo.mass} kilograms. Their ID is ${animalInfo.astronautID}.`);
}

let raceResults = [];

function fitnessTest(crew) {
   move(crew);
   let movesEachAnimal = [];
   let animalRaceMoves =[];
//places moves from object to local array
   for(let i = 0; i < crew.length; i++) {
       movesEachAnimal.push(crew[i].move);
       animalRaceMoves.push(1);
   }
//For each iteration, if moves is less than 20 keeps going until over 20
   for(let j = 0; j < crew.length; j++) {
      while(movesEachAnimal[j] < 20) {
         move(crew);
         movesEachAnimal[j] += crew[j].move;
         animalRaceMoves[j]++;
      }
      raceResults.push(`${crew[j].name} took ${animalRaceMoves[j]} turns to take 20 steps.`)
   }
   return raceResults;
}

function runProgram(){
   createAstronautID(crew);
   fitnessTest(crew);
   console.log(crew);
   for(let k = 0; k < raceResults.length; k++){
      console.log(raceResults[k]);
   }
}

runProgram();
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

