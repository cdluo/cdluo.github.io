var projImgBig = true;

function titleResponsive(){
	var width = document.documentElement.clientWidth;
	var title = document.getElementById("title");
	var socialButtons = document.getElementById("socialButtons")

	if(width < 400){
		title.style.fontSize = "4.5em";
		socialButtons.style.top = "56%";
	}else{
		title.style.fontSize = "6.0em";
		socialButtons.style.top = "64%";
	}
}

function imageResponsive(){
	var width = document.documentElement.clientWidth;
	var maps = document.getElementById("mapsImg");
	var agent32 = document.getElementById("agent32Img");
	var TNW = document.getElementById("TNWImg");
	var rubMal = document.getElementById("rubMalImg");

	var chris = document.getElementById("chrisPic");

	if(width <= 991 && width >= 768){
		console.log("making small...")
		projImgBig = false;
		maps.src = "images/mapsSmall.png";
		agent32.src = "images/agent32Small.png";
		TNW.src = "images/TTNWSmall.png";
		rubMal.src = "images/rubberMalletSmall.png";
		chris.src = "images/chrisRed.jpg"
	}else if(projImgBig == false){
		console.log("making big...")
		projImgBig = true;
		maps.src = "images/maps.png";
		agent32.src = "images/agent32.png";
		TNW.src = "images/TTNW.png";
		rubMal.src = "images/rubberMallet.png";
		chris.src = "images/PP.jpg"
	}
	console.log(width  + " ProjectImgResponsive Done!");
}

function checkSugi(){
	var width = document.documentElement.clientWidth;
	var projects = document.getElementById("projects");

	if(width > 770){
		projects.style.backgroundImage = "url(\"images/sugiBWNoBG.png\"), url(\"images/davidMattiaBG.jpg\")";
		projects.style.backgroundRepeat = "no-repeat, repeat";
	}else{
		projects.style.backgroundImage = "url(\"images/davidMattiaBG.jpg\")";
		projects.style.backgroundRepeat = "repeat";
	}
}

titleResponsive();
imageResponsive();
// checkSugi();
$(window).resize(function(){
	titleResponsive();
	imageResponsive();
});

//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84210593-1', 'auto');
ga('send', 'pageview');