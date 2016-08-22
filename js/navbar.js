function clearSelected(){
	document.getElementById("navHome").classList.remove('selected');
	document.getElementById("navAbout").classList.remove('selected');
	document.getElementById("navExp").classList.remove('selected');
	document.getElementById("navRes").classList.remove('selected');
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    var newSelected;

    if(scroll >= 1800){
    	newSelected = "navRes";
    }else if(scroll >= $("#experience").offset().top-30){
    	newSelected = "navExp"
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

$("#navExp").click(function() {
  $('html, body').animate({
    scrollTop: $("#experience").offset().top-30
  }, 500);
});

$("#navRes").click(function() {
  $('html, body').animate({
    scrollTop: $("#resume").offset().top-30
  }, 500);
});