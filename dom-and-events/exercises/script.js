function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
//Lift off button press event
    button.addEventListener('click', event => {
        paragraph.innerHTML =  'Houston! We have liftoff!'
    });
//Abort mission button mouse over event
   missionAbort.addEventListener("mouseover", function (){
        document.getElementById("abortMission").style.background='#FF0000';
    });
//Abort mission button mouse out event
   missionAbort.addEventListener("mouseout", function (){
        document.getElementById("abortMission").style.background='';
    });
//Abort mission buttton click event
    missionAbort.addEventListener("click", function(){
        let missionAborted = window.confirm("Are you sure you want to abort the mission?");
        if(missionAborted){
            paragraph.innerHTML =  'Mission Aborted! Space shuttle returning home.' 
        }
    });

    
}

window.addEventListener("load", init);
