// TOP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botao_top").style.display = "block";
    } else {
        document.getElementById("botao_top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

// MENU
function myFunction() {
    var x = document.getElementById("navheder_ul_id");
    if (x.className === "navheder_ul_class") {
        x.className += " responsive";
    } else {
        x.className = "navheder_ul_class";
    }
}

// LOGIN
var modal = document.getElementById('id01');

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// SIDEBAR1
var acc = document.getElementsByClassName("butao_sidebar1");
var i;

for (i = 0; i < acc.length; i++){
  acc[i].onclick = function(){
    this.classList.toggle("efeito_botao_sidebar1");
    var painel = this.nextElementSibling;
    if (painel.style.maxHeight){
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    } 
  }
}