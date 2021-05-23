var h1tag = document.createElement('h1')
h1tag.textContent = 'Welcome to my JS Site'
var ptag = document.createElement('p')
ptag.textContent = 'All of this was created with Javascript'
var oltag = document.createElement('ol')
var newList1 = document.createElement('li')
var newList2 = document.createElement('li')
var newList3 = document.createElement('li')

document.body.appendChild(h1tag)
document.body.appendChild(ptag)
document.body.appendChild(oltag)

oltag.appendChild(newList1)
oltag.appendChild(newList2)
oltag.appendChild(newList3)

newList1.textContent = "videos help a lot"
newList2.textContent = "i am getting the hang of this coding stuff"
newList3.textContent = "Learning html while doing this course makes sense"