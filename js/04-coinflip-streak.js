/*eslint-env browser */  
var coinFlip;
var i = 0;
    do { 
        i += 1;
        coinFlip = Math.round(Math.random());
        if (coinFlip === 0) {
            window.document.write("Heads" + "<br>");
        } else {
            window.document.write("Tails" + "<br>");
        }
    } while (coinFlip === 0);


