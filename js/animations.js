var home = false;
var about = false;
var projects = false;
var resume = false;

function checkAnim(){
	var scroll = $(window).scrollTop();
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		if(resume == false){
			resume = true;
			document.getElementById("resume").classList.add('pulse');
		}
	}else if(scroll >= $("#projects").offset().top-$("#about").height()){
		if(projects == false){
			projects = true;
			document.getElementById("mapsRow").classList.add('fadeInLeft');
			document.getElementById("mapsRow").classList.remove('invisible');

			document.getElementById("agent32Row").classList.add('fadeInRight');
			document.getElementById("agent32Row").classList.remove('invisible');

			document.getElementById("TNWRow").classList.add('fadeInLeft');
			document.getElementById("TNWRow").classList.remove('invisible');

			document.getElementById("rubMalRow").classList.add('fadeInRight');
			document.getElementById("rubMalRow").classList.remove('invisible');
		}
	}else if(scroll >= $("#about").offset().top-($("#home").height()/2)+30){
		console.log($("#home").height());
				console.log("animating about");
		if(about == false){
			about = true;
			document.getElementById("aboutRow").classList.add('fadeInLeft');
			document.getElementById("aboutRow").classList.remove('invisible');
		}
	}
}

checkAnim();
$(window).scroll(function (event) {
	checkAnim();
});