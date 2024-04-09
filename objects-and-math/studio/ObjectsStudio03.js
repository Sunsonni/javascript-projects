// Code your crewMass function here:
function crewMass(crew) {
  let totalCrewMass = 0;
  for(let animal in crew){
    totalCrewMass += crew[animal].mass;
  }
  return totalCrewMass.toFixed(1);
}

// Code your fuelRequired function here:
function fuelRequired(totalCrewMass, crew) {
  let totalMass = totalCrewMass + 75000;
  let fuelNeeded;
  fuelNeeded = totalMass * 9.5;
  for (let animal in crew) {
    if (crew[animal].species === 'dog' ||  crew[animal].species === 'cat') {
      fuelNeeded += 200;
    } else {
      fuelNeeded += 100;
    }
  }
  return Math.ceil(fuelNeeded);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateD,candidateF];

 console.log(crewMass(crew));
 console.log(fuelRequired(crewMass(crew),crew));
 console.log(`The mission hass a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired(crewMass(crew),crew)} kg of fuel`);
 