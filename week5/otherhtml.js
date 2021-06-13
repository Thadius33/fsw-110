


function sub(){
    var firstname = (document.getElementById("fname").value);
    var lastname = (document.getElementById("lname").value);
    var ages = Number(document.getElementById("age").value);
    var genders = (document.getElementById("gen2").value);
    var country = (document.getElementById("countries").value);
    var cho1 = (document.getElementById("choice1").value);
    var cho2 = (document.getElementById("choice2").value);
    var cho3 = (document.getElementById("choice3").value);
    alert("First Name : " + firstname + " \n " + "Last Name : " +lastname + "\n" + 
    "Age: " + ages + "\n" + "Gender: " + genders + "\n" + "Home Country: " + country + "\n"
    + "Wants to visit : " + cho1 + "  " + cho2 + "  " + cho3  )
}