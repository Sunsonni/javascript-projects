let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num){
    if(num %2 === 0){
        if(num %3 === 0) {
            if(num %5 === 0){
                return "LaunchCode Rocks!";
            }
            return "LaunchCode!";
        } else if (num %5 === 0) {
            return "Launch Rocks! (CRASH!!!!)";
        }
        return "Launch!";
    } 
    if(num %3 === 0){
        if(num %5 === 0){
            return "Code Rocks!";
        }
        return "Code!";
    } 
    if (num %5 === 0){
        return "Rocks!";
    } else {
        return "Rutabagas! That doesn't work.";
    }
}
};

module.exports = launchcode;