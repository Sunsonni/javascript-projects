let numOrbit = 5;
let radius = 2000;
let orbitalSpeed = 28000; //km/Hr
let circumference = (orbitCircumference(radius));

// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let circumference = 2*Math.PI*radius;
  return Math.round(circumference);
}

//Calculates mission duration
  function missionDuration(numOrbit, orbitRadius, orbitSpeed){
    let time = (circumference/orbitSpeed)*numOrbit
    return (Math.round(time*100)/100); 
}

// console.log(`The mission will travel ${numOrbit*circumference} km around the planet, and it will take ${(missionDuration(numOrbit, radius, orbitalSpeed))} hours to complete.`)

//selects a random candidate for spacewalk
  function selectRandomEntry(array){
    let randSelect= Math.floor(Math.random()*array.length);
    randSelect=array[randSelect];
    return randSelect;
  }

  function smallestOxygenConsumption (crew) {
    let comparision = 1;
    let crewMemberLeastOxygen;
    let timeFrame = missionDuration(3,radius, orbitalSpeed);
    for(let candidates of crew){
      if (candidates.o2Used(timeFrame) < comparision){
        comparision = candidates.o2Used(timeFrame);
        crewMemberLeastOxygen = candidates;
      };
    }
    return crewMemberLeastOxygen;
  }

// Code your oxygenExpended function here:
function oxygenExpended(selectedCrewMemeber, radius, orbitalSpeed){
  let duration = missionDuration(3, radius, orbitalSpeed);
  let totalOxygenExpended = selectedCrewMemeber.o2Used(duration);
  // console.log(totalOxygenExpended);
  return totalOxygenExpended.toFixed(3);
}

// Candidate data & crew array.
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
let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

let selectedCrewMemeber = selectRandomEntry(crew);
// console.log(selectedCrewMemeber);

// console.log(oxygenExpended(selectedCrewMemeber,radius,orbitalSpeed));

// console.log(selectedCrewMemeber.o2Used(missionDuration(5, radius, orbitalSpeed)));

// console.log(`${selectedCrewMemeber.name} will perform the spacewalk, which will last ${missionDuration(3, radius, orbitalSpeed)} hours and require ${oxygenExpended(selectedCrewMemeber,radius,orbitalSpeed)} kg of oxygen.`)

  console.log(smallestOxygenConsumption(crew));   