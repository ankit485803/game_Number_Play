
// game Number playing

let gameNum = 25;

 let userNum = prompt("Guess the game number whatever in your mind to play: ");
 console.log(userNum);

 while (userNum != gameNum) { 
    // game
    userNum = prompt("You entered wrong number. Please guess again! ");

   
 }
 console.log("Congratulation! , you have entered the right number.");
