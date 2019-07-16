// $(document).ready(function(){

// Keyboard Input
var computer_choices = "aeiou";
// console.log(computer_choices)

// Creating variables to hold the number of wins and losses
var user_wins = 0;
var losses = 0;
var remaining_guesses = 10; 
var current_guesses = [];

 // Create variables that hold references to the places in the HTML where we want to display things.
var user_guess_text = document.getElementById("user-guess");
var computer_choices_text = document.getElementById("computer-choice");
var remaining_guesses_text = document.getElementById("remaining-guesses");
var current_guesses_text = document.getElementById("current-guesses");
var user_wins_text = document.getElementById("user-wins");
var losses_text = document.getElementById("losses");
var instructions = document.getElementById("instructions"); 

instructions.style.display = "block";

 // This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var user_guess = event.key.toLowerCase();
        if (user_guess.match(/[a-z]/) && user_guess !== "capslock" && user_guess !== "enter" && user_guess !== "backspace"){
            var guess_text = user_guess;
  
            instructions.style.display = "none";

         
    // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computer_guess = computer_choices[Math.floor(Math.random() * computer_choices.length)];
    //   console.log(computer_guess);

       if (user_guess === computer_guess) {
            user_wins++;
 
        }
        else if(remaining_guesses === 0) {
            losses++;
            remaining_guesses = 10;
            current_guesses_text.innerHTML = " ";
            computer_choices_text.textContent = " ";
        } 
        else {
            remaining_guesses--;
            current_guesses_text.innerHTML += " " + guess_text;
            // user_guess_text.textContent = " " + user_guess;
            computer_choices_text.textContent = " " + computer_guess;
        }

        
        
        // Display the user and computer guesses, and wins/losses/ties.
        // user_guess_text.textContent = " " + user_guess;
        // computer_choices_text.textContent = " " + computer_guess;
        // current_guesses_text.innerHTML += " " + user_guess;
        // console.log(current_guesses);
        remaining_guesses_text.textContent = " " + remaining_guesses;
        user_wins_text.textContent = " " + user_wins;
        losses_text.textContent = " " + losses;


}};
