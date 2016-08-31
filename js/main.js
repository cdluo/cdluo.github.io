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

function checkSugi(){
	console.log("checking Sugi...")
	var width = document.documentElement.clientWidth;

	if(width > 770){
		document.getElementById("projects").style.backgroundImage = "url(\"images/sugiBWNoBG.png\"), url(\"images/davidMattiaBG.jpg\")";
		document.getElementById("projects").style.backgroundRepeat = "no-repeat, repeat";
	}else{
		document.getElementById("projects").style.backgroundImage = "url(\"images/davidMattiaBG.jpg\")";
		document.getElementById("projects").style.backgroundRepeat = "repeat";
	}
}

titleResponsive();
$(window).resize(function(){
	titleResponsive();
	checkSugi();
});