document.getElementById("red-box").addEventListener("mousemove", function(event) {
    myFunction(event);
  });
  
  function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("h1").innerHTML = coor;
  }