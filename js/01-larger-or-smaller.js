/*eslint-env browser */  
var firstInt = parseInt(window.prompt("Enter a number"));
var nextInt = parseInt(window.prompt("Enter another number"));
if (firstInt >= nextInt) {
    window.document.write(firstInt);
} else {
    (nextInt >= firstInt)
    window.document.write(nextInt);
} 
