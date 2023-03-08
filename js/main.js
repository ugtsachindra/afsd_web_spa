$(document).ready(function() {
    loadHome();

});

function hideContent() {
    //document.getElementById('home').style.display="block";
    document.getElementById('mainContainer').innerHTML="";
   
}
function loadHome(){
    hideContent();
    $("#mainContainer").load("home.html");
    $("#mainContainer").value=true;
}
function loadAbout(){
    hideContent();
    $("#mainContainer").load("about.html");
    $("#mainContainer").value=true;
}
function loadSales(){
    hideContent();
    $("#mainContainer").load("sales.html");
    $("#mainContainer").value=true;
}
function loadContact(){
    hideContent();
    $("#mainContainer").load("contact.html");
    $("#mainContainer").value=true;
}