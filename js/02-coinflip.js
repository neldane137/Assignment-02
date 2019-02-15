/*eslint-env browser */  

/* Item 1-7: coinflip using any random number *
var coinFlip = Math.floor((Math.random() * 10) + 1);
var choice = prompt("Heads or Tails?").toLowerCase();
    if (coinFlip <= 5 && choice == "heads") {
        window.alert("The flip was heads and you chose heads... you win!");
    } else if (coinFlip <= 5 && choice == "tails") {
        window.alert("The flip was heads and you chose tails... you lose!");
    } else if (coinFlip >= 6 && choice == "heads") {
        window.alert("The flip was tails and you chose heads... you lose!");
    } else if (coinFlip >= 6 && choice == "tails") {
        window.alert("The flip was tails and you chose tails... you win!");
    } else {
        window.alert("Try again. Heads or Tails?")
    }
*/

/* Item #8: coinflip using 0=false; 1=true*/
var coinFlip = Math.round(Math.random());
var choice = prompt("Heads or Tails?").toLowerCase();
    if (coinFlip == false && choice == "heads") {
        window.alert("The flip was heads and you chose heads... you win!");
    } else if (coinFlip == false && choice == "tails") {
        window.alert("The flip was heads and you chose tails... you lose!");
    } else if (coinFlip == true && choice == "heads") {
        window.alert("The flip was tails and you chose heads... you lose!");
    } else if (coinFlip == true && choice == "tails") {
        window.alert("The flip was tails and you chose tails... you win!");
    } else {
        window.alert("Try again. Heads or Tails?")
    }
