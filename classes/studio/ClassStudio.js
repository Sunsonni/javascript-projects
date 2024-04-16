class CrewCandidate{
    constructor(name,mass,scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
addScore(newscore){

    this.scores.push(newscore)
}
average(){
    let avg = 0;
    let sum = 0;
    for(const item of this.scores) {
        sum += item;
    }
   avg = sum/this.scores.length;
    avg = avg.toFixed(1);
    return avg 
}
status(){
let avg = this.average();
if(avg >= 90){
    return "Accepted"
} else if (avg <= 89 && avg >= 80 ) {
    return "Reserve"
} else if(avg >= 70 && avg <= 79) {
    return "Probationary"
} else{
    return "Rejected"
}
}
}

let bear = new CrewCandidate("Bubba Bear",135,[88,85,90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88,97]);
let gator = new CrewCandidate("Glad Gator", 225,[75, 78, 62]);
for(let i = 6; i > 0; i--){
    gator.addScore(100);
}

console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);
// console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);