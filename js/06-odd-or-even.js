/*eslint-env browser */  
var x = 0;
while (x < 15) {
    x += 1;
    if (x % 2 === 0) {
         window.document.write(x + " is even" + "<br>");
    } else {
        window.document.write(x + " is odd" +"<br>");
    }
}
