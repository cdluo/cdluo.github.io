function titleResponsive(){
	var width = document.documentElement.clientWidth;

	if(width < 400){
		document.getElementById("title").style.fontSize = "4.5em";
		document.getElementById("socialButtons").style.top = "56%";
	}else{
		document.getElementById("title").style.fontSize = "6.0em";
		document.getElementById("socialButtons").style.top = "64%";
	}
}

titleResponsive();
$(window).resize(function(){
	titleResponsive();
});