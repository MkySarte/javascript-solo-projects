let homeLabel = document.getElementById("home-score")
let guestLabel = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

console.log(homeScore)
console.log(guestScore)

function highlight(){
    if(homeScore > guestScore) {
        homeLabel.style.color = "green";
        guestLabel.style.color = "#F94F6D"; 
    } else if(guestScore > homeScore) {
        guestLabel.style.color = "green";
        homeLabel.style.color = "#F94F6D"; 
    } else {
        
        homeLabel.style.color = "#F94F6D";
        guestLabel.style.color = "#F94F6D";
    }
}


function addScoreHome1() {
    homeScore += 1
    homeLabel.textContent = homeScore
    highlight()
    

    console.log("H: " + homeScore)
    console.log("G: "+ guestScore)
}

function addScoreHome2() {
    homeScore += 2
    homeLabel.textContent = homeScore
    highlight()

    console.log("H: " + homeScore)
    console.log("G: "+ guestScore)
}

function addScoreHome3() {
    homeScore += 3
    homeLabel.textContent = homeScore
    highlight()
   
    console.log("H: " + homeScore)
    console.log("G: "+ guestScore)
}

function addScoreGuest1() {
    guestScore += 1
    guestLabel.textContent = guestScore
    highlight()

    console.log("H: " + homeScore)
    console.log("G: "+ guestScore)
}

function addScoreGuest2() {
    guestScore += 2
    guestLabel.textContent = guestScore
    highlight()

    console.log("H: " + homeScore)
    console.log("G: "+ guestScore)
}

function addScoreGuest3() {
    guestScore += 3
    guestLabel.textContent = guestScore
    highlight()

    console.log("H: " + homeScore)
    console.log("G: "+ guestScore)
}

function resetScore(){
    homeLabel.textContent = 0
    guestLabel.textContent = 0

    homeScore = 0
    guestScore = 0

    homeLabel.style.color = "#F94F6D";
    guestLabel.style.color = "#F94F6D";
}

console.log(homeScore)
console.log(guestScore)

// let team1Name = "Home"
// let team2NAme = "Guest"

// let team1El = document.getElementById("home-label")

// function changeTeam1() {
    
//     let inputFeld = document.getElementById("team1-input")
//     team1Name = inputFeld.value 

//     team1El.textContent = team1Name
//     console.log("Dein team ist " + team1Name)

// }