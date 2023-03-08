
function hideContent() {
    document.getElementById('home').style.display="none";
    document.getElementById('about').style.display="none";
    document.getElementById('sales').style.display="none";
    document.getElementById('contact').style.display="none";
    
   
}
function loadHome(){
    hideContent();
    document.getElementById('home').style.display="block";
}
function loadAbout(){
    hideContent();
    document.getElementById('about').style.display="block";
}
function loadSales(){
    hideContent();
    document.getElementById('sales').style.display="block";
}
function loadContact(){
    hideContent();
    document.getElementById('contact').style.display="block";
}