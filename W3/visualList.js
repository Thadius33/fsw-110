for (var i = 0; i < 10; i++){

var h1tag = document.createElement("h1")
h1tag.textContent = "Hello World"
document.body.appendChild(h1tag)
h1tag.setAttribute("style", "color: blue")
}



const names = ["steve","larry","joe","shirley","steph","nate","rick","emily"];

for(var i = 0; i < names.length; i++){
    var newNames = document.createElement("h2")
    newNames.textContent = names[i]
    document.body.appendChild(newNames)

}