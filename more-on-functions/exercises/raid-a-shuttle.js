function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let currentFuelLevel = function(a){
  if(checkFuel(a) === 'green'){
    return a - 100001;
  } else if  (checkFuel(a) === 'yellow') {
    return a - 50001;
  } else {
    return a;
  }
};
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
let currentCargo = function(b) {
  let droppedLoad = [];
  droppedLoad = b.splice(3 ,2 , 'bandana', 'leaves');
  console.log(droppedLoad);
  return droppedLoad;
};

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
irs(fuelLevel,cargoHold);


function irs(fuelLevel, cargoHold) {
  let items = currentCargo(cargoHold);
  console.log(`Raided ${currentFuelLevel(fuelLevel)} kg of fuel from the tanks, and stole ${items[0]} and ${items[1]} from the cargo hold.`);
}