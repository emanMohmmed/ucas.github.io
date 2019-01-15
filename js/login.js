 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("txtUsername").value;
var password = document.getElementById("txtPassword").value;
if ( username == "220182078" && password == "106227$212453"){
alert ("Login successfully");
window.location = "homepage.html"; // Redirecting to other page.
return false;
}

}