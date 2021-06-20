// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function



var my_func = function(event) {
    
    event.preventDefault();
};

var form = document.getElementById("submit-me");

form.addEventListener("submit", my_func);