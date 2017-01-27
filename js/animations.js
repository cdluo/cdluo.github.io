var home = false;
var about = false;
var projects = false;
var resume = false;

function checkAnim(){
	var scroll = $(window).scrollTop();

	// Checking sections in reverse order is needed to play the animations
	// in the right order.
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		if(resume == false){
			resume = true;
			document.getElementById("resumeHeader").classList.add('bounce');
		}
	}else if(scroll >= $("#projects").offset().top-$("#about").height()-30){
		if(projects == false){
			projects = true;

			document.getElementById("binaRow").classList.add('fadeInRight');
			document.getElementById("binaRow").classList.remove('invisible');

			document.getElementById("mapsRow").classList.add('fadeInLeft');
			document.getElementById("mapsRow").classList.remove('invisible');

			document.getElementById("TNWRow").classList.add('fadeInRight');
			document.getElementById("TNWRow").classList.remove('invisible');

			document.getElementById("rubMalRow").classList.add('fadeInLeft');
			document.getElementById("rubMalRow").classList.remove('invisible');

			document.getElementById("agent32Row").classList.add('fadeInRight');
			document.getElementById("agent32Row").classList.remove('invisible');
		}
	}else if(scroll >= $("#about").offset().top-($("#home").height()-30)){
		if(about == false){
			about = true;
			document.getElementById("aboutRow").classList.add('slideInUp');
			document.getElementById("aboutRow").classList.remove('invisible');
		}
	}
}

checkAnim();
$(window).scroll(function (event) {
	checkAnim();
});