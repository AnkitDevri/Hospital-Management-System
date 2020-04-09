function emergency() {
  var e = document.getElementById("emergency");
  if (e.style.display === "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}

function login() {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appointment() {
  var t = document.getElementById("appointment");
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
}
function signup(){
  var y = document.getElementById("signup");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
function contactus(){
  var z= document.getElementById("contactus");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
function vlogin() 
{
  if(validatelogin())
 {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
}
function vappointment() {
  if(validateappointment())
    {
  var t = document.getElementById("appointment");
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
}
}
function vsignup()
{
  if(validatesignup())
 {
  var y = document.getElementById("signup");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
}
function vcontactus()
{
  if(validatecontact())
 {
  var z= document.getElementById("contactus");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
}

function validatelogin()
{

if( document.getElementById("email").value == "" )
{
alert( "Please provide your email!" );

return false;
}
if( document.getElementById("password").value == "" )
{
alert( "Please provide your password!" );

return false;
}
return( true );
}

function validateappointment()
{
  if( document.getElementById("aname").value == "" )
{
alert( "Please provide your name!" );

return false;
}
  
if( document.getElementById("amob").value == "" )
{
alert( "Please provide your mobile nubmer!" );

return false;
}
  
if( document.getElementById("adescription").value == "" )
{
alert( "Please provide your feedback!" );

return false;
}
  
return( true );
}

function validatesignup()
{
  
if( document.getElementById("Name").value == "" )
{
alert( "Please provide your name!" );

return false;
}
  
if( document.getElementById("Mob").value == "" )
{
alert( "Please provide your mobile nubmer!" );

return false;
}
  
if( document.getElementById("Email").value == "" )
{
alert( "Please provide your email!" );

return false;
}
  
if( document.getElementById("Password").value == "" )
{
alert( "Please provide your password!" );

return false;
}

return( true );
}

function validatecontact()
{
  if( document.getElementById("emaiL").value == "" )
{
alert( "Please provide your email!" );

return false;
}
  
if( document.getElementById("description").value == "" )
{
alert( "Please provide the feedback!" );

return false;
}

return( true );
}

function job()
{
  alert("No jobs available ");
}
