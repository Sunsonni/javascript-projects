window.addEventListener("load", function(){
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    let vertical = 0;
    let horizontal = 0;

    takeOffButton.addEventListener("click", function(){
        let confirm = window.confirm("Is the shuttle ready?");
        if(confirm){
         flightStatus.innerHTML = "Shuttle in flight.";   
         shuttleBackground.style.backgroundColor = "blue"; 
         spaceShuttleHeight.innerHTML = 10000;
         rocket.style.position = "absolute";
         rocket.style.left = "0px";
         rocket.style.bottom = "0px";
        }

    landingButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    abortMissionButton.addEventListener("click", function (){
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if(confirm){
            flightStatus.innerHTML = "Mission Aborted :(";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    up.addEventListener("click", function(){
        vertical += 10;
        rocket.style.bottom = vertical + "px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;

    });

    down.addEventListener("click", function(){
        if(parseInt(spaceShuttleHeight.innerHTML) < 10000){

        } else {
            vertical -= 10;
            rocket.style.bottom = vertical + "px";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        }
        
    });


    left.addEventListener("click", function(){
        horizontal -= 10;
        rocket.style.left = horizontal + "px";
    });

    right.addEventListener("click", function(){
        horizontal += 10;
        rocket.style.left = horizontal + "px";
    });

    });
});