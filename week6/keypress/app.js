/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. 
document.getElementById("output").addEventListener("onkeypress", function(event) {
    myFunction(event);
  });*/

  document.onkeypress = function(evt) {
    evt = evt || window.event;
    var x = evt.which || evt.keyCode;   
    var y = String.fromCharCode(x); 
    alert("You have pressed the " + y + " key. The Key code is " + x )   
} 