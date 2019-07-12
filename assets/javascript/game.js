// $(document).ready(function(){

// Keyboard Input
var computer_choices = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
// console.log(computer_choices)

// Creating variables to hold the number of wins and losses
var user_wins = 0;
var computer_wins = 0;
var remaining_guesses = 10; 
var current_guesses = "";

 // Create variables that hold references to the places in the HTML where we want to display things.
var user_guess_text = document.getElementById("user-guess");
var computer_choices_text = document.getElementById("computer-choice");
var remaining_guesses_text = document.getElementById("remaining-guesses");
var current_guesses_text = document.getElementById("current-guesses");
var user_wins_text = document.getElementById("user-wins");
var computer_wins_text = document.getElementById("computer-wins");

 // This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var user_guess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computer_guess = computer_choices[Math.floor(Math.random() * computer_choices.length)];
    //   console.log(computer_guess);

      if (user_guess === computer_guess) {

        }
};
