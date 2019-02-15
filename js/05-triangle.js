/*eslint-env browser */  
var var1 = ["#", "##","###", "####", "#####", "######", "#######"];
var hashes = "";
var i;
for (i = 0; i <var1.length; i++) {
    window.document.write(hashes += var1[i] + "<br>");
}

