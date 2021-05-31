for (var i = 0; i < 5; i++){

    var h2tag = document.createElement("h2")
    h2tag.textContent = "Hello World"
    h2tag.style.fontSize = "20px"
    h2tag.style.fontWeight = "lighter"
    h2tag.style.fontFamily = "sans-serif"
    h2tag.style.color = "cornflowerblue"
    h2tag.classList.add("border")
    document.body.appendChild(h2tag)
    
}