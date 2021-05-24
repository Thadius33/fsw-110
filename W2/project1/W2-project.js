// h1 tag
var h1tag = document.createElement('h1')
h1tag.textContent = 'A Few Coding Tidbits'
document.body.appendChild(h1tag)

//navbar
var ultag = document.createElement('ul')
document.body.appendChild(ultag)

var list1 = document.createElement('li')
var list2 = document.createElement('li')
ultag.appendChild(list1)
ultag.appendChild(list2)

var link1 = document.createElement('a')
link1.setAttribute('href','https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript')
link1.textContent = 'Stackoverflow'
list1.appendChild(link1)

var link2 = document.createElement('a')
link2.setAttribute('href','https://www.w3schools.com/')
link2.textContent = 'w3Schools'
list2.appendChild(link2)

//<p>
var ptag = document.createElement('p')
ptag.textContent = 'Here are the tags used to setup a basic webpage:'
document.body.appendChild(ptag)

// list 
var div1 = document.createElement('div')
document.body.appendChild(div1)

var oltag = document.createElement('ol')
document.body.appendChild(oltag)

var list3 = document.createElement('li')
list3.textContent = '<!Doctype>'
oltag.appendChild(list3)

var list4 = document.createElement('li')
list4.textContent = '<HTML>'
oltag.appendChild(list4)

var list5 = document.createElement('li')
list5.textContent = '<head>'
oltag.appendChild(list5)

var list6 = document.createElement('li')
list6.textContent = '<body>'
oltag.appendChild(list6)

//footer
var footer1 = document.createElement('footer')
footer1.textContent = 'Author: Thadius Vannburan'
document.body.appendChild(footer1)

