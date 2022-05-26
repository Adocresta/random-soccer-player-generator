
// !TODO add more stats to def and off stats add a array for stats and add a loop that roll the numbers
// an array which has
class defensiveStats{
    penaltyAreaSafety;
}

class offensiveStats{
    shot;
}

class soccerPlayer{
    firstName;
    lastName;
    nationality;
    defensiveStats = new defensiveStats;
    offensiveStats = new offensiveStats;
}

var newPlayer = new soccerPlayer;
newPlayer.defensiveStats.penaltyAreaSafety =100;

console.log(newPlayer.defensiveStats.penaltyAreaSafety);
console.log("11");

// user inputs for name
newPlayer.firstName = prompt("Player First Name:");
newPlayer.lastName = prompt("Player Last Name:");
console.log(newPlayer.firstName + " " + newPlayer.lastName);

//user input for nation
newPlayer.nationality = prompt("Player Nationality:");
console.log(newPlayer.nationality);

// rand returns 1 - 100
// we set a random number to player stats
newPlayer.defensiveStats.penaltyAreaSafety = Math.floor(Math.random() * 101) + 1; 
newPlayer.offensiveStats.shot = Math.floor(Math.random() * 101) + 1; 
console.log(
    "Player stats generated:\n"
    ,"Player name: " + newPlayer.firstName + " " + newPlayer.lastName + "\n"
    ,"Player nation: " + newPlayer.nationality + "\n"
    ,"Player penalty Area Safety: " + newPlayer.defensiveStats.penaltyAreaSafety + "\n" 
    ,"Player Shot: " +newPlayer.offensiveStats.shot + "\n"
)