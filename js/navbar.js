var navHome = document.getElementById("navHome");
var navAbout = document.getElementById("navAbout");
var navPro = document.getElementById("navPro");
var navRes = document.getElementById("navRes");

var selected = "navHome";

// Responsive Formatting //
var width = document.documentElement.clientWidth;

if(width < 450){
	navHome.style.width = "23.5%";
	navAbout.style.width = "23.5%";
	navPro.style.width = "29.5%";
	navRes.style.width = "23.5%";
}else if(width < 800){
		navHome.style.width = "24%";
	navAbout.style.width = "24%";
	navPro.style.width = "28%";
	navRes.style.width = "24%";
}

console.log("Width " + width + ": Navbar formatting done");
///////////////////////////

function clearSelected(){
	navHome.classList.remove('selected');
	navAbout.classList.remove('selected');
	navPro.classList.remove('selected');
	navRes.classList.remove('selected');
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    var newSelected;

    if(scroll >= 1800){
    	newSelected = "navRes";
    }else if(scroll >= $("#projects").offset().top-30){
    	newSelected = "navPro"
    }else if(scroll >= $("#about").offset().top-30){
    	newSelected = "navAbout"
    }else{
    	newSelected = "navHome"
    }

    if(newSelected != selected){
    	clearSelected();
    	document.getElementById(newSelected).classList.add('selected');
    	selected=newSelected;
    }
});

$("#navHome").click(function() {
  $('html, body').animate({
    scrollTop: $("#home").offset().top
  }, 500);
});

$("#navAbout").click(function() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top-30	
  }, 500);
});

$("#navPro").click(function() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top-30
  }, 500);
});

$("#navRes").click(function() {
  $('html, body').animate({
    scrollTop: $("#resume").offset().top-30
  }, 500);
});