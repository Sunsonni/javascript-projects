// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm; //calculates milesToMars
let hoursToMars = milesToMars / shuttleSpeedMph; //calculates hoursToMars
let daysToMars = hoursToMars / 24; //calculates daysToMars


// Print the results of the space mission calculations below
console.log(spaceShuttleName + " will take " + daysToMars + " days to reach Mars."); //outputs final calculations to user

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm; //calcualtes milesToMoon
let hoursToMoon = milesToMoon / shuttleSpeedMph; // calculates hoursToMoon
let daysToMoon = hoursToMoon / 24; // calculates daysToMoon

// Print the results of the trip to the moon below
console.log(spaceShuttleName + " will take " + daysToMoon + " days to reach the Moon.");