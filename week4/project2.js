

function addition(){
    var add1 = Number(document.getElementById("add1").value);
    var add2 = Number(document.getElementById("add2").value);
    document.getElementById("addP").textContent= add1 + add2
    return false
}

document.getElementById("addbutton").addEventListener("click", addition)

function subtraction(){
    var sub1 = Number(document.getElementById("sub1").value);
    var sub2 = Number(document.getElementById("sub2").value);
    document.getElementById("subP").textContent= sub1 - sub2
    return false
}

document.getElementById("subbutton").addEventListener("click", subtraction)

function multiplication(){
    var mul1 = Number(document.getElementById("mul1").value);
    var mul2 = Number(document.getElementById("mul2").value);
    document.getElementById("mulP").textContent= mul1 * mul2
    return false
}

document.getElementById("mulbutton").addEventListener("click", multiplication)


