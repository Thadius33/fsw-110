

function onloadBox(){
    box.style.backgroundColor = "Black";
}

function mouseOvrBox(){
    box.style.backgroundColor = "Green"
}

function mouseDwnBox(){
    box.style.backgroundColor = "Yellow"
}

function mouseUpBox(){
    box.style.backgroundColor = "Blue"
}

function mouseDblBox(){
    box.style.backgroundColor = "Red"
}
function mouseScroll(){
    box.style.backgroundColor = "Purple"
}

var box = document.getElementById("box")

box.addEventListener("mouseover", mouseOvrBox)

box.addEventListener("mousedown", mouseDwnBox)

box.addEventListener("mouseup", mouseUpBox)

box.addEventListener("dblclick",mouseDblBox)

document.addEventListener("scroll", mouseScroll)


    


