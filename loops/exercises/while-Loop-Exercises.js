//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startFuelLevel = 0;
let numAstronautsAboard = 0;
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
 while (startFuelLevel <= 5000 ||  startFuelLevel > 30000 || isNaN(startFuelLevel)){
  startFuelLevel = input.question(`Input a fuel amount greater than 5,000 but less than 30,000 `);
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numAstronautsAboard <= 0 || numAstronautsAboard > 7 || isNaN(numAstronautsAboard)) {
  numAstronautsAboard = input.question(`Input number of astronauts. `);
}  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startFuelLevel - 100 * numAstronautsAboard >= 0) {
  shuttleAltitude += 50;
  startFuelLevel -= 100 * numAstronautsAboard;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);

if (shuttleAltitude >= 2000) {
  console.log(`Orbit achieved!`);
} else {
  console.log(`Failed to reach orbit.`);
}